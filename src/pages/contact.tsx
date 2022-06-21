import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { GrFormNextLink } from "@react-icons/all-files/gr/GrFormNextLink"
import { GrMail } from "@react-icons/all-files/gr/GrMail"
import { GrTwitter } from "@react-icons/all-files/gr/GrTwitter"
import { GrGithub } from "@react-icons/all-files/gr/GrGithub"
import { GrLinkedinOption } from "@react-icons/all-files/gr/GrLinkedinOption"

const ContactPage = () => {
  return (
    <Layout>
      <Seo title="Contact"></Seo>
      <h1 className="heading"> Contact</h1>
      <div className="card">
        <form
          action="https://formspree.io/f/abhayonlyone@gmail.com"
          method="POST"
        >
          <div className="flex flex-col items-center justify-center max-w-[340px] m-auto">
            <input
              type="text"
              name="name"
              className="border-solid border-fg-200 border-2 bg-bg-200 text-fg-100 rounded-[5px] text-[18px] p-4 outline-none focus:border-[3px] focus:border-fg-100 mb-[2em]"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              className="border-solid border-fg-200 border-2 bg-bg-200 text-fg-100 rounded-[5px] text-[18px] p-4 outline-none focus:border-[3px] focus:border-fg-100 mb-[2em]"
              placeholder="Email"
            />
            <textarea
              className="border-solid border-fg-200 border-2 bg-bg-200 text-fg-100 rounded-[5px] text-[18px] p-4 outline-none focus:border-[3px] focus:border-fg-100 mb-[2em]"
              name="content"
              placeholder="What's on your mind"
              style={{ resize: "vertical", minHeight: "6em" }}
            />
            <button className="bg-fg-100 text-bg-100 py-[0.6em] px-[1.2em] border-none rounded-[6px] font-bold text-[16px] flex items-center">
              Send
              <GrFormNextLink
                style={{
                  fontSize: "1.5em",
                  marginLeft: "0.5em",
                  transform: "translateY(-1px)",
                }}
              />
            </button>
          </div>
        </form>
        <hr className="border-b-[2px] border-b-transparent m-[2em]" />
        <div className="flex items-center justify-center">
          <a href="mailto:rathod.sahaab@gmail.com" className="mr-[2em]">
            <GrMail className="text-fg-200" size={36} title="Send an email" />
          </a>
          <a href="https://twitter.com/swayambhu_dev" className="mr-[2em]">
            <GrTwitter color="#1DA1F2" size={36} title="Twitter" />
          </a>
          <a href="https://github.com/rathod-sahaab" className="mr-[2em]">
            <GrGithub className="text-fg-200" size={36} title="GitHub" />
          </a>
          <a href="https://linkedin.com/in/rathod-sahaab">
            <GrLinkedinOption
              className="text-fg-200"
              size={36}
              title="Linkedin"
            />
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
