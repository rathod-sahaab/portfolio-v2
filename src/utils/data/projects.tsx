import React from "react"

import { ProjectGifs } from "./ProjectGifs"
import { StaticImage } from "gatsby-plugin-image"

const projects = [
  {
    title: "elide.in: A webapp to make your URLs catchy and easy.",
    description:
      "The app helps you simplify your urls by letting you decide what they are so you can use relatable urls instead of some gibberish.",
    link: "https://console.elide.in",
    tagIds: ["frontend", "backend", "rust", "react", "ts"],
    imgComponent: <img src={ProjectGifs.elide} alt="elide project's GIF" />,
  },
  {
    title: "QRCoder: A simple app to generate QR codes",
    description:
      "Just enter the text, email, hyperlink etc. select error correction level, choose the color and boom you have a QR.",
    link: "https://rathod-sahaab.github.io/qrcoder",
    tagIds: ["frontend", "react", "js"],
    imgComponent: <img src={ProjectGifs.qrcoder} alt="QRCoder project's GIF" />,
  },
  {
    title: "Command Palette: feature that made using Inkscape super fast",
    description:
      "Typing to do things is way faster than using a mouse, command palette is a feature that provides you just that -- A very smart box to type commands into -- and execute them before you could've even touched your mouse.",
    link: "https://dev.to/rathod_sahaab/inkscape-command-palette-merged-15c2",
    tagIds: ["cpp", "gtkmm"],
    imgComponent: (
      <StaticImage
        src="../../images/projects/command-palette.png"
        alt="Command Palete screen shot"
      />
    ),
    alt: "Command Palete screen shot",
  },
  {
    title: "Dart Board: A file server written in dart",
    description:
      "A server that you can point to a folder and it will list it's contents for you, then click on a file to download it over HTTP. A project written in 3 days to learn about HTTP on lower level with pretty low level framework 'Shelf' using dart.",
    link: "https://github.com/rathod-sahaab/dart_board",
    tagIds: ["dart", "frontend", "backend", "pug"],
    imgComponent: (
      <StaticImage
        src="../../images/projects/dart-board.png"
        alt="Dart board screen shots"
      />
    ),
    alt: "Dart board screen shots",
  },
]

export default projects
