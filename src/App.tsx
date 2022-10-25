
import './App.css'
import {Box, Flex} from "@chakra-ui/react"

function App() {
  return (
    <div className="App">
      {/* <Box as='section' bg='green' w='120px' h='150px'>
        This is a box
      </Box> */}
      <Flex justify='space-between' align='center'>
        <Box bg='green' w='100px' h='200px'>
          item1
        </Box>
        <Box bg='blue' w='100px' h='200px'>
          item1
        </Box>
        <Box bg='red' w='200px' h='100px'>
          item1
        </Box>
        <Box bg='tomato' w='100px' h='200px'>
          item1
        </Box>
      </Flex>
    </div>
  )
}

export default App
