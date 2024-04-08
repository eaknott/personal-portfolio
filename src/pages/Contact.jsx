function Contact() {
  return (
    <div className="contact">
        <div className="contact-text">
            <h1>Get in Touch</h1>
            <p>If you would like to say hello or learn more about my experience, you can reach me by email, LinkedIn, or drop a message here. I will get back to you as soon as I can.</p>
            <br />
            <p>My email: <span className="contact-email">emilyknott.dev@gmail.com</span></p>
        </div>
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
        <button type="submit" className="form-button">Send</button>
      </form>
    </div>
  )
}

export default Contact
