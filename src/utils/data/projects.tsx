import React from "react"

import { ProjectGifs } from "./ProjectGifs"
import { StaticImage } from "gatsby-plugin-image"

const projects = [
  {
    title: "elide.me: A webapp to make your URLs catchy and easy.",
    description:
      "The app helps you simplify your urls by letting you decide what they are so you can use relatable urls instead of some gibberish.",
    link: "https://console.elide.me",
    tagIds: ["rust", "react", "frontend", "js"],
    imgsrc: ProjectGifs.elide,
    isgif: true,
    alt: "elide project's GIF",
  },
  {
    title: "QRCoder: A simple app to generate QR codes",
    description:
      "Just enter the text, email, hyperlink etc. select error correction level, choose the color and boom you have a QR.",
    link: "https://rathod-sahaab.github.io",
    tagIds: ["react", "js"],
    imgsrc: ProjectGifs.qrcoder,
    isgif: true,
    alt: "QRCoder project's GIF",
  },
  {
    title: "Command Palette: feature that made using Inkscape super fast",
    description:
      "Typing to do things is way faster than using a mouse, command palette is a feature that provides you just that -- A very smart box to type commands into -- and execute them before you could've even touched your mouse.",
    link: "https://rathod-sahaab.github.io",
    tagIds: ["cpp"],
    imgsrc: (
      <StaticImage
        src="../images/projects/command-palette.png"
        alt="Command Palete screen shot"
      />
    ),
    isgif: false,
    alt: "Command Palete screen shot",
  },
  {
    title: "Dart Board: A file server written in dart",
    description:
      "I made this project to learn about HTTP on lower level with pretty low level framework 'Shelf' using dart. I got to learn more about HTTP and how frameworks work internally.",
    link: "https://github.com/rathod_sahaab/dart_board",
    tagIds: ["dart", "frontend", "backend", "pug"],
    imgsrc: (
      <StaticImage
        src="../images/projects/dart-board.png"
        alt="Dart board screen shots"
      />
    ),
    isgif: false,
    alt: "Dart board screen shots",
  },
]

export default projects
