const AMENDMENTS = [
  {
    number: 1,
    title: "Freedom of Religion, Speech, and the Press",
    description:
      "Congress shall make no law respecting an establishment of religion or prohibiting its free exercise; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.",
  },
  {
    number: 2,
    title: "The Right to Bear Arms",
    description:
      "A well-regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.",
  },
  {
    number: 3,
    title: "The Housing of Soldiers",
    description:
      "No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.",
  },
  {
    number: 4,
    title: "Protection from Unreasonable Searches and Seizures",
    description:
      "The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.",
  },
  {
    number: 5,
    title: "Protection of Rights to Life, Liberty, and Property",
    description:
      "No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury, except in cases arising in the land or naval forces, or in the Militia, when in actual service in time of War or public danger; nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb; nor shall be compelled in any criminal case to be a witness against himself, nor be deprived of life, liberty, or property, without due process of law; nor shall private property be taken for public use, without just compensation.",
  },
  {
    number: 6,
    title: "Rights of Accused Persons in Criminal Cases",
    description:
      "In all criminal prosecutions, the accused shall enjoy the right to a speedy and public trial, by an impartial jury of the State and district wherein the crime shall have been committed, which district shall have been previously ascertained by law, and to be informed of the nature and cause of the accusation; to be confronted with the witnesses against him; to have compulsory process for obtaining witnesses in his favor, and to have the Assistance of Counsel for his defence.",
  },
  {
    number: 7,
    title: "Rights in Civil Cases",
    description:
      "In Suits at common law, where the value in controversy shall exceed twenty dollars, the right of trial by jury shall be preserved, and no fact tried by a jury, shall be otherwise re-examined in any Court of the United States, than according to the rules of the common law.",
  },
  {
    number: 8,
    title: "Excessive Bail, Fines, and Punishments Forbidden",
    description:
      "Excessive bail shall not be required, nor excessive fines imposed, nor cruel and unusual punishments inflicted.",
  },
  {
    number: 9,
    title: "Other Rights Kept by the People",
    description:
      "The enumeration in the Constitution, of certain rights, shall not be construed to deny or disparage others retained by the people.",
  },
  {
    number: 10,
    title: "Undelegated Powers Kept by the States and the People",
    description:
      "The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people.",
  },
]

const LANDMARK_CASES = [
  {
    name: "Marbury v. Madison (1803)",
    description: "Established judicial review",
    era: "1800s",
    topic: "judicial-power",
    impact: "Gave the Supreme Court power to declare laws unconstitutional",
  },
  {
    name: "McCulloch v. Maryland (1819)",
    description: "Addressed the scope of federal power",
    era: "1800s",
    topic: "federalism",
    impact: "Established federal supremacy and the implied powers of Congress",
  },
  {
    name: "Gibbons v. Ogden (1824)",
    description: "Interpreted the Commerce Clause",
    era: "1800s",
    topic: "commerce",
    impact: "Expanded federal power to regulate interstate commerce",
  },
  {
    name: "Dred Scott v. Sandford (1857)",
    description: "Ruled on slavery and citizenship",
    era: "1800s",
    topic: "civil-rights",
    impact: "Denied citizenship to African Americans and contributed to tensions leading to the Civil War",
  },
  {
    name: "Plessy v. Ferguson (1896)",
    description: "Upheld racial segregation",
    era: "1800s",
    topic: "civil-rights",
    impact: "Established the 'separate but equal' doctrine",
  },
  {
    name: "Brown v. Board of Education (1954)",
    description: "Overturned Plessy v. Ferguson",
    era: "1900s",
    topic: "civil-rights",
    impact: "Declared racial segregation in public schools unconstitutional",
  },
  {
    name: "Gideon v. Wainwright (1963)",
    description: "Addressed right to counsel",
    era: "1900s",
    topic: "due-process",
    impact: "Established the right to an attorney for criminal defendants",
  },
  {
    name: "Miranda v. Arizona (1966)",
    description: "Established Miranda rights",
    era: "1900s",
    topic: "due-process",
    impact: "Required police to inform suspects of their rights before questioning",
  },
  {
    name: "Roe v. Wade (1973)",
    description: "Addressed abortion rights",
    era: "1900s",
    topic: "privacy",
    impact: "Established a woman's right to choose to have an abortion",
  },
  {
    name: "United States v. Nixon (1974)",
    description: "Addressed executive privilege",
    era: "1900s",
    topic: "executive-power",
    impact: "Limited the power of the president to withhold information in criminal proceedings",
  },
  {
    name: "Bush v. Gore (2000)",
    description: "Resolved the 2000 presidential election",
    era: "2000s",
    topic: "elections",
    impact: "Effectively decided the outcome of the 2000 presidential election",
  },
  {
    name: "Citizens United v. FEC (2010)",
    description: "Addressed campaign finance",
    era: "2000s",
    topic: "freedom-speech",
    impact: "Allowed corporations and unions to spend unlimited amounts on elections",
  },
]


document.addEventListener("DOMContentLoaded", () => {
  
  updateFooterDates()
  setupNavigation()
  initializeLazyLoading()


  if (document.getElementById("amendments-list")) {
    initializeAmendments()
  }
  if (document.getElementById("cases-grid")) {
    initializeLandmarkCases()
  }
  if (document.getElementById("newsletter-form")) {
    setupNewsletterForm()
  }


  const startQuizButton = document.getElementById("start-quiz")
  if (startQuizButton) {
    startQuizButton.addEventListener("click", () => {
      localStorage.setItem("quizStartTime", new Date().toISOString())
      window.location.href = "quiz.html"
    })
  }
})


function updateFooterDates() {
  const yearSpan = document.getElementById("currentYear")
  const lastModifiedSpan = document.getElementById("lastModified")

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear()
  }
  if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified
  }
}

function setupNavigation() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html"
  const navLinks = document.querySelectorAll("nav a")

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active")
    }
  })
}


function initializeLazyLoading() {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          img.classList.add("loaded")
          observer.unobserve(img)
        }
      })
    })

    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      imageObserver.observe(img)
    })
  }
}


function initializeAmendments() {
  const amendmentSelect = document.getElementById("amendment-select")

  if (amendmentSelect) {

    amendmentSelect.addEventListener("change", (e) => {
      const selectedAmendment = AMENDMENTS.find((a) => a.number === Number.parseInt(e.target.value))
      const detailsDiv = document.getElementById("amendment-details")

      if (selectedAmendment && detailsDiv) {
        detailsDiv.innerHTML = `
                    <h3>${selectedAmendment.title}</h3>
                    <p>${selectedAmendment.description}</p>
                `
        detailsDiv.classList.add("animate-fade-in")
      }
    })
  }
}


function initializeLandmarkCases() {
  const casesGrid = document.getElementById("cases-grid")
  const eraFilter = document.getElementById("era-filter")
  const topicFilter = document.getElementById("topic-filter")

  function filterCases() {
    const era = eraFilter.value
    const topic = topicFilter.value

    const filteredCases = LANDMARK_CASES.filter((caseItem) => {
      const eraMatch = !era || caseItem.era === era
      const topicMatch = !topic || caseItem.topic === topic
      return eraMatch && topicMatch
    })

    displayCases(filteredCases)
  }

  function displayCases(cases) {
    if (casesGrid) {
      casesGrid.innerHTML = ""
      cases.forEach((caseItem) => {
        const article = document.createElement("article")
        article.className = "case-card animate-fade-in"
        article.innerHTML = `
                    <h3>${caseItem.name}</h3>
                    <p>${caseItem.description}</p>
                    <p class="impact"><strong>Impact:</strong> ${caseItem.impact}</p>
                `
        casesGrid.appendChild(article)
      })
    }
  }

  if (eraFilter && topicFilter) {
    eraFilter.addEventListener("change", filterCases)
    topicFilter.addEventListener("change", filterCases)
  }


  displayCases(LANDMARK_CASES)
}


function setupNewsletterForm() {
  const form = document.getElementById("newsletter-form")

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      const email = form.email.value


      const subscriptions = JSON.parse(localStorage.getItem("subscriptions") || "[]")
      subscriptions.push({
        email,
        date: new Date().toISOString(),
      })
      localStorage.setItem("subscriptions", JSON.stringify(subscriptions))


      const successMessage = document.createElement("div")
      successMessage.className = "success-message animate-fade-in"
      successMessage.textContent = "Thank you for subscribing!"
      form.appendChild(successMessage)


      form.reset()
      setTimeout(() => successMessage.remove(), 3000)
    })
  }
}

