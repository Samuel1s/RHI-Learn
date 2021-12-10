// Azure Imports
import { cloudModels } from "./azure/section-1.js"
import { servicesTypes } from "./azure/section-2.js"
import { storage } from "./azure/section-3.js"
import { governance } from "./azure/section-4.js"
import { privacyPolicies } from "./azure/section-5.js"
import { defense } from "./azure/section-6.js"

// SAP - Imports
import { intro } from "./sap/section-1.js"
import { module } from "./sap/section-2.js"
import { sapsd} from "./sap/section-3.js"

const allTemplates = [
    // About Azure
    {
        template: cloudModels.template
    },
    {
        template: servicesTypes.template
    },
    {
        template: storage.template
    },
    {
        template: governance.template
    },
    {
        template: privacyPolicies.template
    },
    {
        template: defense.template
    },

    // About SAP
    {
        template: intro.template
    },
    {
        template: module.template
    },
    {
        template: sapsd.template
    }
]

const slides = document.querySelector("#banner-slide")
const pagination = document.querySelector(".page-number")
const progressbar = document.querySelector("#myprogressBar")

let cont = 0

const scene = () => {
    progressbar.style.width = ((cont + 1) * 11.11111) + '%'
}

const createContext = () => {
    const initialContext = document.createRange().createContextualFragment(allTemplates[cont].template)

    slides.appendChild(initialContext)

    pagination.innerHTML = cont + 1
}

const updateContext = (e) => {   
   let i = e.currentTarget.id == 'next-slide' ? 1 : -1
   
   cont += i
   
   const currentSlide = document.querySelector(".slide")

   const newContext = document.createRange().createContextualFragment(allTemplates[cont].template)
       
   slides.replaceChild(newContext, currentSlide)

   pagination.innerHTML = cont + 1

   scene()
}

createContext()
scene()

document.querySelector("#next-slide").addEventListener('click', updateContext)
document.querySelector("#previous-slide").addEventListener('click', updateContext)
