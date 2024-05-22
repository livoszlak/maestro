export default function Drink({ params }: { params: { slug: string } }) {
  const drinkName = params.slug.toLowerCase();

  console.log(params.slug);
  /* if (drinkName.includes(" ")) */
  return (
    <>
      <p>{drinkName}</p>
    </>
  );
}

/**
 * 
Now let's set up some data to test with. Create a folder called api inside your app folder. Then copy the drinks.json file in resources and place it inside your api folder.

Open your drinks page file and import the your .json file. Map through your json data to display all your drinks on your /drinks page.

Go to [slug].js and import your .json file. Match the slug in the url with the title of a project in your data. If there is a match, display the data for that project.


export default function Project({ params }) {
  const projectTitle = params.slug.toLowerCase();
  const matchingProject = projectApi.find(
    (project) => project.slug.toLowerCase() === projectTitle
  );

  if (!matchingProject) {
    return (
      <main>
        <h1>No project found</h1>
      </main>
    );
  }

  return (
    <main>
      <h1>{matchingProject.title}</h1>
      <p>Description: {matchingProject.description}</p>
    </main>
  );
}
 */
