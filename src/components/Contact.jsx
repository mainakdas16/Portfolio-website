import React, { useRef, useState } from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';

function Contact() {

    const formRef = useRef();
    const [done, setDone] = useState(false);
    const [value, setValue] = useState('');
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const handleChange1 = (event) => {
        setValue1(event.target.value);
    }
    const handleChange2 = (event) => {
        setValue2(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // email js just everything from documentation
        // Easyyy
        emailjs.sendForm(
            'service_2000xq8', 
            'template_pkkv6va', 
            formRef.current, 
            'N9WUED8sto3-gwZeg'
        )
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your Project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img className='c-icon' src="data:image/png;base64,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" alt="" />
                            +91 9123393564
                        </div>
                        <div className="c-info-item">
                            <img className='c-icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAACDCAMAAACa2JQ5AAAAZlBMVEX///8AAAABAQGsrKy9vb3b29uvr6+MjIx7e3vT09P7+/t4eHiCgoI5OTk8PDzp6en09PQTExMMDAwbGxvJyclvb29PT09VVVVISEiampq2trZjY2MyMjKioqLi4uJdXV0rKyskJCSh6VeKAAAFDklEQVRoge2a53arOhBGGYoxmCJAdAz4/V/yjiTjUOQkCJzz4+pb6yTHFG80Gk0RMQwtLS0tLS0tLS0trZNEaO3WlPwL9CUEpqj5c7Kfw6TbH6P7DCC5EINYKUAX/yW6weG2ghgP+H/779AB4tzpg+/OP31YpFqNlFmh/BN/pzjD1XKGe3T5zDud5K3k1DjIwnOWBykzRb2+9uDT+CFsZEKSrg6lCR7dKDyf/WtFh9lDc1FRUx5nd7XirXVylN1VF8Vb79Hh+Q6Vx50d97VA8dbbCb6m2ZqNInbt5m0euJbzIbYRydk8ebzk9p9gY10gYcctptHrxev73rFrLFwSS8Y+VFEQVg9t2XEEpj2rFXq87C5jQ6tcUXgZSNkRPFbVIRZRm1lnbBjfOMNPYlXCrduyLTDZN5L7iCn6Qks25ALaLXtkdfTWID+LsBstia/5FVwNUSeNHZYNvETAkm1tXuZrd/yOfLfdGbqjsjUWA1D8VUHlxHGfixIBD64rJO7nFG1TyFbBN6JRwgtwCZvyIVLIxJwnnE1GWPdGYo3FJZqG7mIzg5dy9gUSZN9hEB+vUBl8ItbLTLD7Aiu5fWvtypw0s2VsCzLCHDEXH92Jva4xOLvhVeVedsrajdrf+lqzHPcNCvxJOpnNectSp/vHjQNEJx3fzLc9rfEMOsaW+dqI4S+9GPvHDYbhPGSx5enSoWiDWAQJSN9Cul5K1ym2KLGFy62DxtMFelw9GT7cWIt8svHlFp6tuSJbxLbViO6Q8bhWl2FYuMTo3bbdZDLyFdNU2QbttsEhm3rBmPhP0rr7dypIu6cplNliAMve3gF4zE0cB2uTN3NzqbOF0yzv7iN0g8aLCSG917CHC/z5+cXewCE2DxDlwqr+pXiEXVREVRSWZVUvTmIog2RmqUNsNnvQLa3qO43bluWQ1zj8xRmWPqq5hxxjG6TlCfU34mlzMQMH2bKvlEr2kIfZhoem7H6qgKQXHWfzwjH5fgOTbfRty8MT2LxgBve93d9ttJ3CxuT1zUZaXGyC0JlsVplLssbruSrpc53EFjlTUvb6LOlc5becxjasRFL2xhhXs3cbM+exeU4Pl5nNGaX9y9lsUopSYb7YLHFoeOOFZ7E9XMFhXM8zF+EuEGOez+Sh5yQ2G+ENoTZOeins7hQim/M8L53yU9h8hCJYx9iNJffYj+uvHW0W8q+S0HMGu0ezJs7siqdeTuax/dvtu5MT2PbKneyIk6tZqOGOuAk9h9mixVgcIt69tpylkWUh/Sg7lo5IorV1jrPF0vrVnf1jvdiOsevvwpbk3mSx2I6weR20562nVeRl/eUHB9is8Xrs2y5yrkMRvKZInW13CttkJMhv7dQUK7OvittU9ddiU2SzOkXxhR81p2CrxqaYMgrVF8w9NjMZVWUvUuV++c/5UtjrMY6/2OavyY39ez1mt3ndu1+sWe4U9pkQ7fXOMfU0VNlfA7ZNe1wKe3v5T9+5S/te93j2mVLcwNfS0tLS0tLS0tLS+p/I+ncyTm289skwTTDhUeUPyLIkScFkB5b/fj7wq6sgNbEvzQApGbanpmmw45FnNd6dUuoO/KbPCMqibMNyHKq2zBiHsxPbqz3vfid1+zk2s3KSTU29ObFzj/bUsZqYfo4NRXALipt7y4c8uEbPceMkVFFXReM4eMXH5hvGMAzHMOq6sgu7bJrv15+td0P6WZt/yTSf7Nnpj6El+g/0zk04CvrWzwAAAABJRU5ErkJggg==" alt="" />
                            dmainak706@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img className='c-icon' src="data:image/png;base64,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" alt="" />
                            Nagendra Bhavan, Bachaspati Para, Talpukur, Barrackpore, Kolkata - 700123
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                       Have anything to ask ? Enter your details here..
                    </p>
                    <form ref={formRef} onSubmit = {handleSubmit}>
                        <input type="text" placeholder='username' name='user_name' value={value} onChange={handleChange}/>
                        <input type="text" placeholder='Subject' name='user_subject' value={value1} onChange={handleChange1}/>
                        <input type="text" placeholder='Email' name='user_email' value={value2} onChange={handleChange2}/>
                        <textarea name="message" rows="5" placeholder='message'></textarea>
                        <button type="submit" disabled={!value1 || !value2 || !value}>Submit</button>
                        {done && "Thank You..."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact