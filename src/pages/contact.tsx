import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { GrFormNextLink } from "@react-icons/all-files/gr/GrFormNextLink"
import { GrMail } from "@react-icons/all-files/gr/GrMail"
import { GrTwitter } from "@react-icons/all-files/gr/GrTwitter"
import { GrGithub } from "@react-icons/all-files/gr/GrGithub"
import { GrLinkedinOption } from "@react-icons/all-files/gr/GrLinkedinOption"

import * as styles from "./contact.module.css"

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
          <div className={styles.form}>
            <input
              type="text"
              name="name"
              className={styles.textfield}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              className={styles.textfield}
              placeholder="Email"
            />
            <textarea
              className={styles.textfield}
              name="content"
              placeholder="What's on your mind"
              style={{ resize: "vertical", minHeight: "6em" }}
            />
            <button className={styles.button}>
              Send
              <GrFormNextLink
                style={{
                  transform: "scale(1.5) translateY(1px)",
                  marginLeft: "0.5em",
                }}
              />
            </button>
          </div>
        </form>
        <hr className={styles.hr} />
        <div className={styles.links}>
          <a href="mailto:rathod.sahaab@gmail.com">
            <GrMail className={styles.link} size={36} title="Send an email" />
          </a>
          <a href="https://twitter.com/swayambhu_dev">
            <GrTwitter
              className={styles.link}
              color="#1DA1F2"
              size={36}
              title="Twitter"
            />
          </a>
          <a href="https://github.com/rathod-sahaab">
            <GrGithub className={styles.link} size={36} title="GitHub" />
          </a>
          <a href="https://linkedin.com/in/rathod-sahaab">
            <GrLinkedinOption
              className={styles.link}
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
