import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        id: 1,
        user: {
          username: "snowowl"
        },
        activityType: "CONTENT_CHANGE",
        branch: {
          branchPath: "MAIN/DEPLOYTEST/DEPLOYTEST-37"
        },
        highestPromotedBranch: {
          branchPath: "MAIN/DEPLOYTEST/DEPLOYTEST-37"
        },
        commitComment: "snowowl creating concept Deployment test (disorder)",
        commitDate: "2016-01-13T10:21:59Z",
        conceptChanges: [
          {
            conceptId: "715455007",
            componentChanges: [
              {
                componentId: "6541137023",
                componentType: "RELATIONSHIP",
                componentSubType: "STATED_RELATIONSHIP",
                changeType: "CREATE"
              },
              {
                componentId: "715455007",
                componentType: "CONCEPT",
                changeType: "CREATE"
              },
              {
                componentId: "3302679018",
                componentType: "DESCRIPTION",
                componentSubType: "SYNONYM_DESCRIPTION",
                changeType: "CREATE"
              },
              {
                componentId: "3302678014",
                componentType: "DESCRIPTION",
                componentSubType: "FSN_DESCRIPTION",
                changeType: "CREATE"
              }
            ]
          }
        ]
      },
      {
        id: 2,
        user: {
          username: "snowowl"
        },
        activityType: "CONTENT_CHANGE",
        branch: {
          branchPath: "MAIN/DEPLOYTEST/DEPLOYTEST-37"
        },
        highestPromotedBranch: {
          branchPath: "MAIN/DEPLOYTEST/DEPLOYTEST-37"
        },
        commitComment: "snowowl adding addiontional relationships of concept Deployment test (disorder)",
        commitDate: "2016-01-13T10:22:29Z",
        conceptChanges: [
          {
            conceptId: "715455007",
            componentChanges: [
              {
                componentId: "6541793029",
                componentType: "RELATIONSHIP",
                componentSubType: "STATED_RELATIONSHIP",
                changeType: "CREATE"
              },
              {
                componentId: "6541792023",
                componentType: "RELATIONSHIP",
                componentSubType: "STATED_RELATIONSHIP",
                changeType: "CREATE"
              },
              {
                componentId: "6541791027",
                componentType: "RELATIONSHIP",
                componentSubType: "STATED_RELATIONSHIP",
                changeType: "CREATE"
              },
              {
                componentId: "6541790026",
                componentType: "RELATIONSHIP",
                componentSubType: "STATED_RELATIONSHIP",
                changeType: "CREATE"
              }
            ]
          }
        ]
      },
      {
        id: 3,
        user: {
          username: "sulrich"
        },
        activityType: "REBASE",
        branch: {
          branchPath: "MAIN/DEPLOYTEST/DEPLOYTEST-34"
        },
        mergeSourceBranch: {
          branchPath: "MAIN/DEPLOYTEST"
        },
        highestPromotedBranch: {
          branchPath: "MAIN/DEPLOYTEST/DEPLOYTEST-34"
        },
        commitComment: "sulrich performed merge of MAIN/DEPLOYTEST to MAIN/DEPLOYTEST/DEPLOYTEST-34",
        commitDate: "2016-01-13T10:27:56Z"
      },
      {
        id: 4,
        user: {
          username: "sulrich"
        },
        activityType: "REBASE",
        branch: {
          branchPath: "MAIN/DEPLOYTEST/DEPLOYTEST-29"
        },
        mergeSourceBranch: {
          branchPath: "MAIN/DEPLOYTEST"
        },
        highestPromotedBranch: {
          branchPath: "MAIN/DEPLOYTEST/DEPLOYTEST-29"
        },
        commitComment: "sulrich performed merge of MAIN/DEPLOYTEST to MAIN/DEPLOYTEST/DEPLOYTEST-29",
        commitDate: "2016-01-13T10:28:17Z"
      },
      {
        id: 5,
        user: {
          username: "snowowl"
        },
        activityType: "CLASSIFICATION_SAVE",
        branch: {
          branchPath: "MAIN/DEPLOYTEST/DEPLOYTEST-37"
        },
        highestPromotedBranch: {
          branchPath: "MAIN/DEPLOYTEST/DEPLOYTEST-37"
        },
        commitComment: "Classified ontology.",
        commitDate: "2016-01-13T10:28:55Z",
        conceptChanges: [
          {
            conceptId: "71865006",
            componentChanges: [
              {
                componentId: "6541799025",
                componentType: "RELATIONSHIP",
                componentSubType: "INFERRED_RELATIONSHIP",
                changeType: "CREATE"
              }
            ]
          },
          {
            conceptId: "715455007",
            componentChanges: [
              {
                componentId: "6541797028",
                componentType: "RELATIONSHIP",
                componentSubType: "INFERRED_RELATIONSHIP",
                changeType: "CREATE"
              },
              {
                componentId: "6541796021",
                componentType: "RELATIONSHIP",
                componentSubType: "INFERRED_RELATIONSHIP",
                changeType: "CREATE"
              },
              {
                componentId: "6541795020",
                componentType: "RELATIONSHIP",
                componentSubType: "INFERRED_RELATIONSHIP",
                changeType: "CREATE"
              },
              {
                componentId: "6541798022",
                componentType: "RELATIONSHIP",
                componentSubType: "INFERRED_RELATIONSHIP",
                changeType: "CREATE"
              },
              {
                componentId: "6541794024",
                componentType: "RELATIONSHIP",
                componentSubType: "INFERRED_RELATIONSHIP",
                changeType: "CREATE"
              }
            ]
          }
        ]
      }
    ];
  }
});
