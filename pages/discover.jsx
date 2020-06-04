import {
  Header,
  Button,
  Avatar,
  Box,
  Stack,
} from 'grommet';
import Graph from 'react-graph-vis';

export default function Discover() {
  const graph = {
    nodes: [
      {
        id: 1,
        // label: 'Node 1',
        title: 'node 1 tootip text',
        shape: 'image',
        image: 'https://cdn4.iconfinder.com/data/icons/linecon/512/photo-512.png',
      },
      {
        id: 2,
        // label: 'Node 2',
        title: 'node 2 tootip text',
        shape: 'image',
        image: 'https://cdn4.iconfinder.com/data/icons/linecon/512/photo-512.png',
      },
      {
        id: 3,
        // label: 'Node 3',
        title: 'node 3 tootip text',
        shape: 'image',
        image: 'https://cdn4.iconfinder.com/data/icons/linecon/512/photo-512.png',
      },
      {
        id: 4,
        // label: 'Node 4',
        title: 'node 4 tootip text',
        shape: 'image',
        image: 'https://cdn4.iconfinder.com/data/icons/linecon/512/photo-512.png',
      },
      {
        id: 5,
        // label: 'Node 5',
        title: 'node 5 tootip text',
        shape: 'image',
        image: 'https://cdn4.iconfinder.com/data/icons/linecon/512/photo-512.png',
      },
    ],
    edges: [],
  };

  const options = {
    nodes: {
      borderWidth: 0,
      shape: 'circle',
      color: {
        background: '#F92C55',
        highlight: {
          background: '#F92C55',
          border: '#F92C55',
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
        nodeDistance: 40,
      },
    },
  };

  return (
    <div id="discover-page">
      <Stack>
        <div id="bubble-view">
          <Graph
            identifier="bubble-graph"
            graph={graph}
            options={options}
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
              <Avatar
                background="light-6"
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              />
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
