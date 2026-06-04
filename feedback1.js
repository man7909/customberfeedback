let feedbacks = [];

function addFeedback(name, message) {
    const feedback = {
        name: name,
        message: message
    };

    feedbacks.push(feedback);
    return feedbacks;
}

module.exports = addFeedback;