import {
  Header,
  Button,
  Avatar,
  Box,
} from 'grommet';

export default function Discover() {
  return (
    <div id="discover-page">
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

      <style jsx>
        {`
        #discover-page {
          font-family: 'Inter', sans-serif;
          margin-top: 25px;
          margin-left: 25px;
          margin-right: 25px;
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
