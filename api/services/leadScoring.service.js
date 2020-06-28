class LeadScoringService {
  constructor(leadId) {
    this.leadId = leadId;
  }

  scoreUpdate(scoreObj) {
    /**
     * Business Logic for scoring leads and making them qualified or not.
     */
    this.makeLeadQualified();
  }

  makeLeadQualified() {
    if (this.checkForQualification()) {
      // TODO: Insert into leads_qualified with extraction of targetId.
    }
  }

  checkForQualification() {
    /**
     * Business Logic for checking if qualified.
     */
    const leadObj = this.leadId;
    return true;
  }
}

module.exports = LeadScoringService;