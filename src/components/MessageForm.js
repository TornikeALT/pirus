import useIntersectionObserver from '../hooks/useIntersectionObserver';
import '../styles/MessageForm.css'

function MessageForm() {
    const { currentRef, animate } = useIntersectionObserver(0.2);

    const handleFormSubmit = (event) => {
        event.preventDefault()
    }


    return (
        <section className='message_form_section' ref={currentRef}>
            <div className="container">
                <div className={`contacts_title ${animate ? 'animate_news ' : ''}`} style={{ opacity: animate ? 1 : 0 }}>
                    <h2>Send us a message!</h2>
                    <p>LOREM IPSUM DOLOR SIT AMET</p>
                </div>
                <form className='message_form' onSubmit={handleFormSubmit}>
                    <div className='form_inputs'>
                        <input type="text" placeholder='First Name' />
                        <input type="text" placeholder='Last Name' />
                        <input type="text" placeholder='Email' />
                        <input type="text" placeholder='Subject' />
                    </div>
                    <textarea placeholder='You Message' cols="50" rows="10"></textarea>
                    <div className='message_form_btn'>
                        <button>SEND MESSAGE</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default MessageForm;