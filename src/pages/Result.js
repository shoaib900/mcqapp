function Result() {
  const score =
    localStorage.getItem("score");

  const total =
    localStorage.getItem("total");
  const name = 
    localStorage.getItem("name");

  const whatsappShare = () => {
    const text = `my name is *${name}*   \n\n *Test 01* \n\n I scored *${score} / ${total}* in MCQ Test`;

    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`
    );
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh", width: "100%", background: "linear-gradient(90deg,rgba(17, 68, 92, 1) 0%, rgba(156, 20, 140, 1) 50%)" }}>

      

      <h1 style={{ color: "white" }}>&nbsp; &nbsp; Your Result : </h1> &nbsp; &nbsp;

      <h2 style={{ color: "white" }}>
        {score} / {total}
      </h2>

      &nbsp; &nbsp; <button className="btn btn-success" onClick={whatsappShare}>
        Share on WhatsApp
      </button>
    </div>
  );
}

export default Result;