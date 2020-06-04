import { useEffect, useState } from 'react';
import {
  Header,
  Button,
  Avatar,
  Box,
  Stack,
  Menu,
} from 'grommet';
import Graph from 'react-graph-vis';
import axios from 'axios';

export default function Discover() {
  const graphOptions = {
    nodes: {
      borderWidth: 0,
      shape: 'circle',
      color: {
        background: '#fff',
        highlight: {
          background: '#fff',
          border: '#fff',
        },
      },
      font: {
        color: '#fff',
      },
    },
    physics: {
      stabilization: false,
      minVelocity: 0.01,
      solver: 'repulsion',
      repulsion: {
        nodeDistance: 120,
      },
    },
  };

  const graphEvents = {
    click: (event) => {
      const { nodes } = event;
      if (nodes.length > 0) {
        window.open(`https://github.com/${nodes[0]}`);
      }
    },
  };

  const [profile, setProfile] = useState({});
  const [activeFellows, setActiveFellows] = useState([]);

  useEffect(() => {
    const getProfile = async () => {
      const result = await axios.get('/api/me');
      setProfile(result.data);
    };

    const getActiveFellows = async () => {
      const result = await axios.get('/api/list');
      setActiveFellows(result.data);
    };

    getProfile();
    getActiveFellows();
    setInterval(getActiveFellows, 3000);
  }, []);

  const generateInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const fellowsToGraph = (fellows) => ({
    nodes: fellows.map((fellow) => ({
      id: fellow.username,
      title: fellow.username,
      shape: 'circularImage',
      image: fellow.profile[0].picture,
      size: generateInteger(50, 100),
    })),
    edges: [],
  });

  return (
    <div id="discover-page">
      <Stack>
        <div id="bubble-view">
          <Graph
            identifier="bubble-graph"
            graph={fellowsToGraph(activeFellows)}
            options={graphOptions}
            events={graphEvents}
          />
        </div>
        <div id="header">
          <Header>
            <Box>
              <h1 className="text-black-grey margin-0">Discover</h1>
              <p className="margin-0">Explore active fellows from different pods.</p>
            </Box>
            <Box
              direction="row"
              align="center"
              gap="medium"
            >
              <Button
                primary
                size="small"
                label="Start a Video Session"
              />
              <Menu
                dropAlign={{ right: 'left', top: 'bottom' }}
                items={[
                  { label: 'Logout', onClick: () => { window.open('/api/logout', '_self'); } },
                ]}
              >
                <Avatar
                  background="light-6"
                  src={profile.picture}
                />
              </Menu>
            </Box>
          </Header>
        </div>
      </Stack>
      <style jsx>
        {`
        #header {
          margin-top: 30px;
          margin-left: 30px;
          margin-right: 30px;
        }

        #header p {
          margin-top: 10px;
        }

        #bubble-view {
          position: fixed;
          width: 100vw;
          height: 100vh;
          top: 0;
          left: 0;
        }

        .text-black-grey {
          color: #444444;
        }

        .margin-0 {
          margin: 0;
        }
      `}
      </style>
    </div>
  );
}
