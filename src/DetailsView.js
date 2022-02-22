import { TagsList } from "./components";

const DetailsView = () => {
    return (
      <>
        <main className="main col-12">
          <div className="col-10 details ms-auto me-auto mt-5">
            <div className="details__header d-flex align-items-center">
              <div className="details__title">Some card</div>
              <TagsList
                className="details__taglist ms-5"
                tags={[{ text: "#waste" }]}
              />
            </div>

            <div className="details__subtitle mt-4">How to make cards</div>
            <div className="details__text col-10 mt-2">
              In this category you will find experiments, plugins and articles
              related to web development and programming.<br></br> Here we present some
              new ideas and inspiration for solving problems and tackling
              challenges around web development.
            </div>
          </div>
        </main>
      </>
    );
}

export default DetailsView