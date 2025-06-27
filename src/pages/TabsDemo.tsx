import { Tabs, Tab, TabPanel } from '@superlogica/new-ds'
import { useState } from 'react'

export default function TabsDemo() {
  const [value, setValue] = useState(0)

  const handleChange = (_: unknown, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
      <h2>Tabs</h2>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Primeira" />
        <Tab label="Segunda" />
      </Tabs>
      <TabPanel value={value} index={0}>
        Conteúdo da primeira aba
      </TabPanel>
      <TabPanel value={value} index={1}>
        Conteúdo da segunda aba
      </TabPanel>
    </>
  )
}
