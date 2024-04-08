const SignIn = async (evt) => {
    fetch("http://localhost:5000/api/user/register", {
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data),
    }).then((res) => console.log(res));
    console.log(data);
    evt.preventDefault();
  };

  function handleChange(evt) {
    const { target } = evt;
    const { name, value } = target;

    const newData = {
      ...data,
      [name]: value,
    };

    setData(newData);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetch("http://localhost:5000/api/user/verify", {
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ email, password }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        user(res);
      });
  };