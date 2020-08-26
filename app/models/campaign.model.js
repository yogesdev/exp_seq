module.exports = (sequelize, Sequelize) => {
  const CampAdd = sequelize.define("rv_campaigns", {
    campaignname: {
      type: Sequelize.STRING
    },
    revenue_type: {
      type: Sequelize.INTEGER
    },
    revenue: {
      type: Sequelize.INTEGER
    }
  });

  return CampAdd;
};

