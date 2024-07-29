const dummyresponse = {
    showLightandDark : false,
    showAccordion : false,
    showRandomColorgenerator : false,
    showTreeView : false,
    showTictacToe: false,
    scrollIndicator : false
}

function featureFlagsDataSeviceCalls(){
    return new Promise((resolve, reject)=> {
        if(dummyresponse) setTimeout(resolve(dummyresponse), 500)
            else reject('Something Wrong Happened')
    })
}

export default featureFlagsDataSeviceCalls;