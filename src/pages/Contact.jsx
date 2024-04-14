import ResumeButton from "../components/ResumeButton"

function Contact() {
  return (
    <div className="contact">
        <section className="contact-text">
            <h1>Get in Touch</h1>
            <p>Contact me if you would like to say hello or learn more about my experience. You can send me an email or a message over LinkedIn. I will get back to you as soon as I can.</p>
        </section>
        <section className="contact-info">
          <p>Reach me by email: <span className="contact-email">emilyknott.dev@gmail.com</span></p>
          <div>
            <p>Check out my resume:</p>
            <ResumeButton />
          </div>
        </section>
        {/* <section>
          <form>
            <div className="form-group">
                <label>Your Name</label>
                <input type="text" className="form-name" placeholder="John Doe" />
            </div>
            <div className="form-group">
                <label>Your Email</label>
                <input type="email" className="form-email" placeholder="johndoe@gmail.com" />
            </div>
            <div className="form-group">
                <label>Your Message</label>
                <textarea placeholder="Type your message here..." cols="30" rows="10"></textarea>
            </div>
            <a href="mailto:emilyknott.dev@gmail.com">
              <button 
                type="submit" 
                className="form-button"
              >
                Send
              </button>
            </a>
          </form>
        </section> */}
    </div>
  )
}

export default Contact
