import React from 'react';

const Contact = () => {
    return (
        <>
            <form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />

                <p>
                    <label>Email: <input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <div data-netlify-recaptcha="true"></div>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>

        </>
    )
}

export default Contact;