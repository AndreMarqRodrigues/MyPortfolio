<template>
  <div class="card-container">
    <div class="card">
      <p class="title">Contact Me</p>
      <div class="content">
        <div class="inputs">
          <input type="text" v-model="fullName" placeholder="Full Name" id="fullname" required /><br />
          <input type="email" v-model="email" placeholder="Email ID" id="email_id" required /><br />
          <textarea v-model="message" placeholder="Message" id="message" required /><br />
          <button @click="sendEmail">Send</button>
        </div>
        <div class="personal-info">
          <p>Phone Number: +44 07340618568</p>
          <p>Address: 217, Gulson Road, Coventry, United Kingdom</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
  data() {
    return {
      fullName: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendEmail() {
      emailjs.init("0M07HZzWX3eVk03e1");
      this.receiveMail();
    },
    receiveMail() {
      var params = {
        from_name: this.fullName,
        email: this.email,
        message: this.message,
      };
      emailjs.send("service_n4ifi99", "template_8040gkw", params).then((res) => {
        alert("Success! " + res.status);
        console.log(this.email)
      });
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Coda&family=Poppins&display=swap');
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Poppins';
}
.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 200rem;
  margin: 0 auto;
  z-index: 0;
  display: flex;
}

input, textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: -10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  background-color: #00afea;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin-left: 0rem;
  margin-right: 20rem ;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: black;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.content {
  display: flex;
  flex-direction: column;
}
.inputs {
  display: grid;
  grid-template-columns: 1fr;
}

.personal-info{
  padding-left: 10px;
  font-size: 1rem;
  margin: -5px;


}
.title{
  color: black;
  font-size: 2rem;
  padding: 10px;
  margin-top: -17px;
  margin-right: 15px;
}
</style>

