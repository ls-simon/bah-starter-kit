const ENDPOINT = import.meta.env.HYGRAPH_ENDPOINT;

async function getSections() {
  const query = `
            { 
                sections {
                    title
                    subtitle
                    description {
                      raw
                      html
                      markdown
                      text
                    }
                    backgroundImage {
                        url
                    }
                    subsections {
                      title
                      subtitle
                      description
                      order
                      subsectionId
                      link
                      media {
                        id
                        url
                        fileName
                        mimeType
                        width
                        height
                        size
                      }
                    }
                    order
                    sectionId
                    includeInNavigation
                    }
                }`;
  return await get(query);
}

async function getMembers() {
  const query = `
  { 
    members {
      name
      role
      image {
        id
        url
        fileName
        mimeType
        width
        height
        size
      }
    }
  }`;
  return get(query);
}

async function getReviews() {
  const query = `
    { 
         reviews(orderBy: date_DESC) {
            name
            location
            text
            date
            stars
            }
        }`;
  return get(query);
}

async function getSoMeLinks() {
  const query = `
            { 
                socialmedias {
                    title
                    link
                    someId
                    icon
                }
            }`;
  return await get(query);
}

async function getFooter() {
  const query = `
            { 
                footers(where: { id: "cm3izxxqz401z07mff0mrfter" }) {
                    name
                    email
                }
            }`;
  return await get(query);
}

async function get(q) {
  const query = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: q,
    }),
  };

  return (await fetch(ENDPOINT, query)).json();
}

export { getSections, getReviews, getSoMeLinks, getMembers, getFooter };
