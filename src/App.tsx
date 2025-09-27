import { useState } from 'react'
import './App.css'
import { Portal, Select, createListCollection, Flex, Input , HStack , RadioGroup , Button} from '@chakra-ui/react'

const frameworks = createListCollection({
  items: [
    { label: "Mars (Qırmızı Səhra)", value: "react" },
    { label: "Titan (Metan Dənizləri)", value: "vue" },
    { label: "Avropa (Buzaltı Okean)", value: "angular" },
    { label: "Kepler-186f (Yeni Dünya)", value: "svelte" },
    { label: "TRAPPIST-1e (Sirli Planet)", value: "" }
  ],
})

 const items = [
  { label: "Kəşfiyyat", value: "1" },
  { label: "Təchizat", value: "2" },
  { label: "Məskunlaşma", value: "3" },
 ]

function App() {
  const [count, setCount] = useState(0)

  return (
    <Flex gap='70px' direction='column' alignItems='center' >
      <Flex direction='column' gap='60px'>
        <Select.Root collection={frameworks} size="sm" width="320px">
          <Select.HiddenSelect />
          <Select.Label>Select Your Planet</Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Select framework" />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {frameworks.items.map((framework) => (
                  <Select.Item item={framework} key={framework.value}>
                    {framework.label}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>
        <Input border='1px solid white' type='date'></Input>
      </Flex>
      <Flex>
        <RadioGroup.Root defaultValue="1">
          <HStack gap="6">
            {items.map((item) => (
              <RadioGroup.Item key={item.value} value={item.value}>
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
              </RadioGroup.Item>
            ))}
          </HStack>
        </RadioGroup.Root>
      </Flex>
      <Flex alignItems='center'>
        <Input w='200px' border='1px solid white' placeholder='min 3 herf!!!'></Input>
        <button>Sumbit</button>
      </Flex>
      Bugunki Tarix : 09.27.2025
      <Flex>
      <Button color='white' disabled>Next</Button>
      </Flex> 
    </Flex>
  )
}

export default App
