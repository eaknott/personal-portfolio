function Contact() {
  return (
    <div className="contact" id="contact">
        <section className="contact-text">
            <h1>Get in Touch</h1>
            <p>Contact me if you'd like to say hello or learn more about my experience. Don't hesitate to send me an email or a message over LinkedIn. Let's chat!</p>
        </section>
        <section className="contact-info">
          <p>Reach me by email: <span className="contact-email"><a href="mailto:emilyknott.dev@gmail.com">emilyknott.dev@gmail.com</a></span></p>
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
