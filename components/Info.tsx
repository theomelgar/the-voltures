import styled from "styled-components";
import banda from "../public/voltures-boa.jpg";
import Image from "next/image";

export default function Info() {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;

    const subject = form.subject.value;

    const body = form.body.value;

    if (email === "") {
      alert("Please enter an email address");

      return;
    }

    if (subject === "") {
      alert("Please enter a subject");

      return;
    }

    if (body === "") {
      alert("Please enter a message");

      return;
    }

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };
  return (
    <Container id="contact">
      <Forms onSubmit={handleSubmit}>
        <h1>CONTACT US</h1>

        <h2>Our Email: theomelgar@gmail.com</h2>

        <label htmlFor="subject">Subject</label>

        <input
          placeholder="Text here"
          id="subject"
          name="subject"
          type="text"
          required
        />

        <label htmlFor="body">Message</label>

        <textarea placeholder="Text here" id="body" name="body" required />

        <button type="submit">SEND EMAIL</button>
      </Forms>
      <Signature>MADE BY: THEO MELGAR</Signature>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #b8b7b7;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  background-image: url(${banda.src});
  background-size: cover; /* Crop image to cover container */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent image from repeating */
`;

const Forms = styled.form`
  width: 40%;
  color: #000000;
  padding-left: 4em;
  font-weight: 700;
  h1 {
    font-family: "NMFBurner-Regular", sans-serif;
    font-size: 80px;
  }
  h2 {
    font-size: 30px;
  }
  label {
    font-size: 30px;
    padding-bottom: 125px;
  }
  input {
    width: 60%;
    height: 50px;
    display: block;
    font-size: 18px;
    border-radius: 10px;
    border: none;
    background: #ff9170;
    padding: 1rem;
  }
  textarea {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    width: 80%;
    height: 200px;
    border-radius: 10px;
    border: none;
    background: #ff9170;
    padding: 1rem;
  }
  button {
    font-weight: 700;
    cursor: pointer;
    width: 150px;
    height: 50px;
    color: #ffffff;
    border: none;
    border-radius: 12px;
    background-color: #000000;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Signature = styled.div`
  font-family: "NMFBurner-Regular", sans-serif;

  font-size: 25px;
  position: absolute;
  left: 20em;
  bottom: 7em;
`;

const CroppedImage = styled(Image)`
  width: 100vw;
  height: 590px;
  object-fit: cover; // or object-fit: contain; depending on your preference
`;
