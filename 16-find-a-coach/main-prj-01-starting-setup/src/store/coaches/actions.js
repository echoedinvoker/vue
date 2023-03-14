export default {
  async registerCoach(context, data) {
    const coachId = context.rootGetters.userId;

    const coachData = {
      // id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      areas: data.areas,
      description: data.desc,
      hourlyRate: data.rate,
    };

    const response = await fetch(
      `https://vue-http-demo-cd7a0-default-rtdb.firebaseio.com/coaches/${coachId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );

    if (!response.ok) {
      // error handling...
    }

    // context.commit('registerCoach', coachData);
    context.commit('registerCoach', {
      ...coachData,
      id: coachId,
    });
  },
  async loadCoaches(context) {
    const response = await fetch(
      `https://vue-http-demo-cd7a0-default-rtdb.firebaseio.com/coaches.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      // error handling...
    }

    const coachesData = [];

    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      coachesData.push(coach);
    }

    context.commit('setCoaches', coachesData);
  },
};
