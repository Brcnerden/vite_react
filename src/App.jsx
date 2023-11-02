import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ContainerFluidExample from "./component/Container";
import Boxes from "./component/Boxes";
import "./sass/style.scss";

function App() {
  return (
    <>
      <Navbar />
      <ContainerFluidExample />
      <section className="pt-4">
        <div className="row gx-lg-5 mt-5px">
          <Boxes
            title="Fresh new layout"
            text="With Bootstrap 5, we've created a fresh new layout for this template!"
            icon="bi bi-collection"
          />
          <Boxes
            title="Free to download"
            text="As always, Start Bootstrap has a powerful collectin of free templates."
            icon="bi bi-cloud-download"
          />
          <Boxes
            title="Jumbotron hero header"
            text="The heroic part of this template is the jumbotron hero header!"
            icon="bi bi-card-heading"
          />
          <Boxes
            title="Feature boxes"
            text="We've created some custom feature boxes using Bootstrap icons!"
            icon="bi bi-bootstrap"
          />
          <Boxes
            title="Simple clean code"
            text="We keep our dependencies up to date and squash bugs as they come!"
            icon="bi bi-code"
          />
          <Boxes
            title="A name you trust"
            text="Start Bootstrap has been the leader in free Bootstrap templates since 2013!"
            icon="bi bi-patch-check"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
