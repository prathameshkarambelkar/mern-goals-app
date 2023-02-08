// @desc     Get Goal
// @route   GET /api/goals
// @access  Private

const getGoals = async (req,res)=> {
    res.status(200).json({message: 'Get Goal'})
}

// @desc     Set Goal
// @route   POST /api/goals
// @access  Private

const setGoal = async (req,res)=> {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message: 'Set Goal'})
}

// @desc     Update Goal
// @route   PUT /api/goals/:id
// @access  Private

const updateGoal = async (req,res)=> {
    res.status(200).json({message: `Update goal ${req.params.id}`})
}

// @desc     delete Goal
// @route   DELETE /api/goals/:id
// @access  Private

const deleteGoal = async (req,res)=> {
    res.status(200).json({message: 'Get Goals'})
}



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}