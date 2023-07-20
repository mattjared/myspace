export const dynamic = 'force-static';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "we are socialz"
}

export default function About() {
  return (
    <>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore officia nemo, adipisci sint voluptatibus reprehenderit eligendi accusamus consequuntur magnam? Ipsam quisquam cum nam dolor sunt molestiae doloribus iure consequatur eius!</p>
    </>
  )
}
