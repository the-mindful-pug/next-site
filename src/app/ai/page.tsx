import Link from "next/link"
import { Button, Stack, TextField } from "@mui/material"

export default function Home() {
  return (
    <>
      <Link href="/">Home</Link>
      <Stack direction="row">
        <TextField />
        <Button>Generate</Button>
      </Stack>
      <Stack direction="row">
        <Button>Contact Co-Pilot</Button>
        <Button>Get Comment Analysis</Button>
        <Button>Get Data Trends</Button>
        <Button>Get Company Summary</Button>
      </Stack>
    </>
  )
}
