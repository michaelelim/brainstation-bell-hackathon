const api_key = "e09daf41-aaa1-4c9d-9b7c-c4604ad16740";
const form = document.getElementById("join-the-convo__form-container");
const usersURL = "https://project-1-api.herokuapp.com/";

removeComments = () => {
  if (document.querySelector(".join-the-convo-comments") != null) {
    document.querySelector(".join-the-convo-comments").remove('section');
  }
}

makeInitialComments = () => {
  const regenContainer = document.querySelector(".join-the-convo-comments__container");
  const regenSection = document.createElement('section');
  regenSection.classList.add("join-the-convo-comments");
  regenContainer.appendChild(regenSection);
}

makeComments = (item, i) => {
  const container = document.querySelector(".join-the-convo-comments");

  const newCommentContainer = document.createElement('div');
  newCommentContainer.classList.add("join-the-convo-comment__comments-container");
  container.appendChild(newCommentContainer);

  const newCircleContainer = document.createElement('div');
  newCircleContainer.classList.add("join-the-convo-comments__circle-container");
  newCommentContainer.appendChild(newCircleContainer);

  const newSquaredImage = document.createElement('div');
  newSquaredImage.classList.add("join-the-convo-comments__image--comments");
  newCircleContainer.appendChild(newSquaredImage);

  // const newImageTrash = document.createElement('div');
  // newImageTrash.classList.add("join-the-convo-comments__image--trash");
  // newImageTrash.setAttribute("id", commentObj[i].id);
  // newCircleContainer.appendChild(newImageTrash);
  // document.getElementById(commentObj[i].id).addEventListener("click", e => {trashComment(commentObj[i].id)});

  const newNameDateContainer = document.createElement('div');
  newNameDateContainer.classList.add("join-the-convo-comments__comments-name-date-container");
  newCommentContainer.appendChild(newNameDateContainer);
  
  const newCommentName = document.createElement('div');
  newCommentName.classList.add("join-the-convo-comments__comments-name");
  newNameDateContainer.appendChild(newCommentName);
  document.querySelectorAll(".join-the-convo-comments__comments-name")[i].innerHTML = commentObj[i].name;

  const newCommentDate = document.createElement('div');
  newCommentDate.classList.add("join-the-convo-comments__comments-date");
  newNameDateContainer.appendChild(newCommentDate);
  document.querySelectorAll(".join-the-convo-comments__comments-date")[i].innerHTML = timeSince(commentObj[i].timestamp);

  const newComment = document.createElement('div');
  newComment.classList.add("join-the-convo-comments__comments");
  newCommentContainer.appendChild(newComment);
  document.querySelectorAll(".join-the-convo-comments__comments")[i].innerHTML = commentObj[i].comment;

  const newDivider = document.createElement('div');
  newDivider.classList.add("join-the-convo-comments__divider");
  container.appendChild(newDivider);
} 

timeSince = (timeStamp) => {
  const rightNow = Date.now();
  const secondsPast = (rightNow - timeStamp)/ 1000;

  if(secondsPast < 60) {
    return parseInt(secondsPast) + " second(s) ago";
  } else if (secondsPast < 3600) {
    return parseInt(secondsPast/60) + " minute(s) ago";
  } else if (secondsPast < 86400) {
    return parseInt(secondsPast/3600) + " hour(s) ago";
  } else if (secondsPast < 2592000) {
    return parseInt(secondsPast/86400) + " day(s) ago";
  } else if (secondsPast <= 31104000) {
    return parseInt(secondsPast/2592000) + " month(s) ago";  
  } else if (secondsPast > 31104000) {
    return parseInt(secondsPast/31104000) + " year(s) ago";
  }
}

form.addEventListener("submit", displayComment => {
  displayComment.preventDefault();

  const formName = document.getElementById("form-name");
  const formComment = document.getElementById("form-comment");
  const newCommentSub = {name: '', comment: ''};

  newCommentSub.name = formName.value;
  newCommentSub.comment = formComment.value;

  const json_object = JSON.stringify(newCommentSub);
  console.log(json_object);

  sendNewComment(json_object);
  commentObj.unshift(newCommentSub);
});

sendNewComment = (json_object) => {
  axios
    .post(usersURL + "comments?api_key=" + api_key, json_object, {headers: {'Content-Type': 'application/json'}})
    .then(() => {getComments()})
    .catch(err => console.log(err))
}

compareThem = (a, b) => {
  const compareA = a.timestamp;
  const compareB = b.timestamp;
  let comparison = 0;

  if (compareA > compareB) {
    comparison = -1;
  } else if (compareA < compareB) {
    comparison = 1;
  }
  return comparison;
}

let commentObj = [];

getComments = () => {
  let itemCount = 0;
  axios
    .get(usersURL + "comments?api_key=" + api_key)
    .then(res => {
      commentObj = res.data;
      commentObj.sort(compareThem);
    })
    .then(() => {removeComments()})
    .then(() => {makeInitialComments()})
    .then(() => {
      commentObj.forEach(item => {
        makeComments(item, itemCount);
        itemCount++;
      })
    })
    .then(() => {form.reset()})
    .catch(err => console.log(err));
};
getComments();

trashComment = (trashID) => {
  axios
    .delete(usersURL + "comments/" + trashID + "?api_key=" + api_key, {headers: {'Content-Type': 'application/json'}})
    .then(() => {removeComments()})
    .then(() => {getComments()})
    .catch(err => console.log(err))
};

const formName = document.getElementById("form-name");
const formComment = document.getElementById("form-comment");
const newCommentSub = {name: '', comment: ''};

newCommentSub.name = formName.value;
newCommentSub.comment = formComment.value;

const json_object = JSON.stringify(newCommentSub);
console.log(json_object);

//== CHART.JS
const jsonfile = {
  "jsonarray": [
    {
      "album": "The White Stripes",
      "year": 1999,
      "US_peak_chart_post": "-"
    },
    {
      "album": "De Stijl",
      "year": 2000,
      "US_peak_chart_post": "-"
    },
    {
      "album": "White Blood Cells",
      "year": 2001,
      "US_peak_chart_post": 61
    },
    {
      "album": "Elephant",
      "year": 2003,
      "US_peak_chart_post": 6
    },
    {
      "album": "Get Behind Me Satan",
      "year": 2005,
      "US_peak_chart_post": 3
    },
    {
      "album": "Icky Thump",
      "year": 2007,
      "US_peak_chart_post": 2
    },
    {
      "album": "Under Great White Northern Lights",
      "year": 2010,
      "US_peak_chart_post": 11
    },
    {
      "album": "Live in Mississippi",
      "year": 2011,
      "US_peak_chart_post": "-"
    },
    {
      "album": "Live at the Gold Dollar",
      "year": 2012,
      "US_peak_chart_post": "-"
    },
    {
      "album": "Nine Miles from the White City",
      "year": 2013,
      "US_peak_chart_post": "-"
    }
  ]
  };

const labels = jsonfile.jsonarray.map((e) => {
  return e.album;
});
const data = jsonfile.jsonarray.map((e) => {
  return e.year;
});

const ctx = canvas.getContext('2d');
const config = {
  type: 'bar',
  data: {
     labels: labels,
     datasets: [{
        label: 'Graph Line',
        data: data,
        backgroundColor: 'rgba(0, 119, 204, 0.3)'
     }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
};

const chart = new Chart(ctx, config);