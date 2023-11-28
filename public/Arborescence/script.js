let progression =0;


let arborescence = {

    window: {

        document: {
            HTML: {
                div: {
                    attribut: {
                        id: {

                        },
                        name: {

                        },
                        style: {

                        },


                    },

                    Js: {

                        style: {

                            backGroundColor: "",
                            width: ""
                        },
                        classList: {
                            add: ["add", "toggle", "remove"],
                            toggle: ["length"],
                            remove: ""
                        },

                    },

                },
                h1: {
                    attribut: {
                        id: {

                        },
                        name: {

                        },
                        style: {

                        },
                    },

                    Js: {
                        style: {

                            backGroundColor: "",
                            width: ""
                        },

                        classList: {
                            add: ["add", "toggle", "remove"],
                            toggle: ["length"],
                            remove: ""
                        },
                    },


                },
                input: {
                    attribut: {
                        id: {

                        },
                        name: {

                        },
                        placeholder: {

                        },
                        style: {

                        },
                        type: {

                        },
                    },

                    Js: {
                        style: {

                            backGroundColor: "",
                            width: ""
                        },

                        classList: {
                            add: ["add", "toggle", "remove"],
                            toggle: ["length"],
                            remove: ""
                        },
                    },



                },textarea:{

                },
            },
            fonctions: {
                getElementById: "",
                addEventListener: "",
                createElement: "",
                setAttribute: ""
            },
            propriétés: {

                contentType: "",
                docType: ""
            }
        },
        fonctions: {
            prompt: "",
            print: "",
            open: "",
            alert: "",
            getComputedStyle: {
                getPropertyValue: ""
            }
        },
        propriétés: {
            origin: "",
            screen: ""
        }
    }
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function createContainer(content, backgroundColor) {
    let container = document.createElement("div");
    container.classList.add("container");
    container.setAttribute("style", `background-color: ${backgroundColor}`);
    container.textContent = content;
    return container;
}

function createInsideDiv(content, backgroundColor) {
    let insideDiv = document.createElement("div");
    insideDiv.classList.add("insideDiv");
    insideDiv.setAttribute("style", `background-color: ${backgroundColor}`);
    insideDiv.textContent = content;
    return insideDiv;
}

function clearContainers() {
    while (containerStack.length > 0) {
        let container = containerStack.pop();
        grid.removeChild(container);
    }
} 
function clearContainersUpTo(targetContainer) {
    while (containerStack.length > 0 && containerStack[containerStack.length - 1] !== targetContainer) {
      let container = containerStack.pop();
      grid.removeChild(container);
    }
  }

let containerStack = [];
document.addEventListener("DOMContentLoaded", () => {
    let window = createContainer("window", "#C573D3");
    grid.appendChild(window);
    containerStack.push(window);
  
    for (let i in arborescence) {
      for (let j in arborescence[i]) {
        let element = createInsideDiv(j, "#737AD3");
        window.appendChild(element);
  
        element.addEventListener("click", () => {
          // Clear containers beyond this point
          clearContainersUpTo(window);
  
          element.style.border = "2px solid green";
  
          let doc = createContainer(j, "#73D3D0");
          grid.appendChild(doc);
          containerStack.push(doc);
  
          for (let k in arborescence[i][j]) {
            let elDoc = createInsideDiv(k, "#39D035");
            doc.appendChild(elDoc);
  
            elDoc.addEventListener("click", () => {
              // Clear containers beyond this point
              clearContainersUpTo(doc);
  
              elDoc.style.border = "2px solid green";
  
              let content3 = createContainer(k, "#E3E61E");
              grid.appendChild(content3);
              containerStack.push(content3);
  
              for (let l in arborescence[i][j][k]) {
                let elContent3 = createInsideDiv(l, "#F0B27A");
                content3.appendChild(elContent3);
  
                elContent3.addEventListener("click", () => {
                  // Clear containers beyond this point
                  clearContainersUpTo(content3);
  
                  elContent3.style.border = "2px solid green";
  
                  let content4 = createContainer(l, "#E46B2A");
                  grid.appendChild(content4);
                  containerStack.push(content4);
  
                  for (let m in arborescence[i][j][k][l]) {
                    let elContent4 = createInsideDiv(m, "#F0B27A");
                    content4.appendChild(elContent4);
  
                    elContent4.addEventListener("click", () => {
                      // Clear containers beyond this point
                      clearContainersUpTo(content4);
  
                      elContent4.style.border = "2px solid green";
  
                      let content5 = createContainer(m, "#EC7063");
                      grid.appendChild(content5);
                      containerStack.push(content5);
  
                      for (let n in arborescence[i][j][k][l][m]) {
                        let elContent5 = createInsideDiv(n, "#F0B27A");
                        content5.appendChild(elContent5);
  
                        elContent5.addEventListener("click", () => {
                          // Clear containers beyond this point
                          clearContainersUpTo(content5);
  
                          elContent5.style.border = "2px solid green";
  
                          let content6 = createContainer(n, "#EC7063");
                          grid.appendChild(content6);
                          containerStack.push(content6);
  
                          for (let o in arborescence[i][j][k][l][m][n]) {
                            let elContent6 = createInsideDiv(o, "#F0B27A");
                            content6.appendChild(elContent6);
  
                            // Continue nesting as needed...
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    }
  });
  
  
  
  
  
  
  