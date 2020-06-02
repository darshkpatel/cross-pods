import { Header, Button } from 'grommet'

export default function Discover() {
  return (
    <div id="discover-page">
      <Header>
        <div>
          <h1 className="text-black-grey margin-0">Discover</h1>
          <p className="margin-0">Explore active fellows from different pods.</p>
        </div>
        <Button primary size="small" label="Start a Video Session" />
      </Header>

      <style jsx>{`
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
      `}</style>
    </div>
  )
}