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
};
