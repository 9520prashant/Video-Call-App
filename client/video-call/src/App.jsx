import {Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import { SocketProvider } from "./Providers/Socket"
import { PeerProvider } from "./Providers/Peer"
import Room from "./Pages/Room"
import VideoBackground from "./Components/VideoBackground"

function App() {

  return (
    <>
      <SocketProvider>
      <PeerProvider>
      <VideoBackground/>
        <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/room/:roomId" element={<Room/>} />
        </Routes>
        </PeerProvider>
      </SocketProvider>
    </>
  )
}

export default App
