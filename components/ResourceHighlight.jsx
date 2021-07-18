const ResourceHighlight = ({ resources }) => {
  resources = resources || [];
  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          {resources.map((resource) => {
            const {id, title, description, createdAt } = resource;
            return (
              <section className="section" key={id}>
                <div className="columns">
                  <div className="column is-8 is-offset-2">
                    <div className="content is-medium">
                      <h2 className="subtitle is-4">{createdAt}</h2>
                      <h1 className="title">{title}</h1>
                      <p>
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResourceHighlight;
