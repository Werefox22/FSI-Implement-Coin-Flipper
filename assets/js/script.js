// declare counters
let tailsCount = 0
let headsCount = 0

// set image paths
const headsImage = "assets/images/penny-heads.jpg"
const tailsImage = "assets/images/penny-tails.jpg"

// get image, buttons, and orange text
const pennyImage = document.querySelector("#pennyImage")
const flipButton = document.querySelector("#flip")
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
    if (Math.random() > 0.5)
    {
        // heads
        headsCount++
        pennyImage.src = headsImage
        resultsText.textContent = "You flipped heads!"
    }
    else
    {
        // tails
        tailsCount++
        pennyImage.src = tailsImage
        resultsText.textContent = "You flipped tails!"
    }

    updateDisplay()
})

// clear button function
clearButton.addEventListener('click', function()
{
    headsCount = 0
    tailsCount = 0
    updateDisplay()
})

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