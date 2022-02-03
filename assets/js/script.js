// declare counters
let tailsCount = 0
let headsCount = 0

// set image paths
const headsImage = "assets/images/penny-heads.jpg"
const tailsImage = "assets/images/penny-tails.jpg"

// get image, buttons, and orange text
const imageContainer = document.querySelector("#image-container")
const pennyImage = document.querySelector("#pennyImage")
const flipButton = document.querySelector("#flip")
const flip10Button = document.querySelector("#flipTen")
const clearButton = document.querySelector("#clear")
const resultsText = document.querySelector("#message")

// get number trackers
const headsDisplay = document.querySelector("#heads")
const tailsDisplay = document.querySelector("#tails")
const headsPercentDisplay = document.querySelector("#heads-percent")
const tailsPercentDisplay = document.querySelector("#tails-percent")

// flip button function
flipButton.addEventListener('click', function()
{
    // flip coin
    let outcome = flip()

    clearImages()

    // make image
    let image = document.createElement("img")
    if (outcome == "heads")
    {
        image.src = headsImage
    }
    else
    {
        image.src = tailsImage
    }
    // set image
    imageContainer.append(image)

    updateDisplay()
})

// flip x10
flip10Button.addEventListener('click', function()
{
    clearImages()
    
    // set array
    let images = []

    // flip 10 times
    for (let i = 0; i < 10; i++)
    {
        let outcome = flip()

        // make image
        let img = document.createElement("img")
        if (outcome == "heads")
        {
            img.src = headsImage
        }
        else
        {
            img.src = tailsImage
        }
        
        imageContainer.append(img)
    }

    updateDisplay()
})

// clear button function
clearButton.addEventListener('click', function()
{
    headsCount = 0
    tailsCount = 0
    updateDisplay()
    clearImages()

    // set coin image so it's not just empty
    let img = document.createElement("img")
    img.src = headsImage
    imageContainer.append(img)
})

// functions
// flip coin
function flip() 
{
    // flip coin
    if (Math.random() > 0.5)
    {
        // heads
        headsCount++
        //pennyImage.src = headsImage
        resultsText.textContent = "You flipped heads!"
        return "heads"
    }
    else
    {
        // tails
        tailsCount++
        //pennyImage.src = tailsImage
        resultsText.textContent = "You flipped tails!"
        return "tails"
    }
}

// clear coin images
function clearImages() 
{
    let oldImages = imageContainer.children
    for (let i = oldImages.length - 1; i >= 0; i--)
    {
        imageContainer.removeChild(oldImages[i])
    }
}


// update counter displays
function updateDisplay() 
{
    // get total flips
    let totalFlips = headsCount + tailsCount

    // update counter displays
    headsDisplay.textContent = headsCount
    tailsDisplay.textContent = tailsCount

    // make sure we aren't clearing counters or we'll divide by zero
    if (totalFlips > 0)
    {
        // set percentages
        headsPercentDisplay.textContent = Math.round((headsCount / totalFlips) * 100) + "%"
        tailsPercentDisplay.textContent = Math.round((tailsCount / totalFlips) * 100) + "%"
    }
    else
    {
        headsPercentDisplay.textContent = "0%"
        tailsPercentDisplay.textContent = "0%"
    }
}

/*
Flipping Coin Pseudocode Steps
Load page
Set variables:
Tails count
Heads count
Tails percentage
Heads percentage
Random number
Recall doucment.queryselectors from HTML text for variables
Number of Heads
Percentage heads
Number of tails
Percentage tails
Flip Penny button
Clear Scoreboard button
Coin image
Orange You Flipped text
Build functions to amend:
Number of Heads
Percentage heads
Number of tails
Percentage tails
Orange text
Build function to do head and tails percentage
Heads % =Heads/totalFlips
Tails %=Tails/totalFlips
Set evenListeners:
Flip Penny
Clear Scoreboard
Button Flip Penny
Inside eventListener do If statement for when random number < 0.5 is heads
Change image to heads
Change orange text to You Flipped Heads!
Insert function for heads %
Insert functions to amend heads number and %
Else tails
Change image to tails
Change orange text to You Flipped Tails!
Insert function for tails %
Insert function to amend tails number and %
Button Clear Scoreboard
Amend heads #, % and tails #, % to 0
Amend orange text to Let's get Rolling!
*/