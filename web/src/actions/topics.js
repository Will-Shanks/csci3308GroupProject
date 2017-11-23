/*
 * Action Types
 */
export const COMMENT_ADD = 'COMMENT_ADD';
export const RESOURCE_ADD = 'RESOURCE_ADD';
export const RESOURCE_VOTE_UP = 'RESOURCE_VOTE_UP';
export const RESOURCE_VOTE_DOWN = 'RESOURCE_VOTE_DOWN';
export const TOPIC_LOAD = 'TOPIC_LOAD';

/*
 * Action Creators
 */
export function addComment(resourceId, payload) {
  return {
    type: COMMENT_ADD,
    resourceId,
    payload
  };
}

export function addResource(topicId, payload) {
  return {
    type: RESOURCE_ADD,
    topicId,
    payload
  };
}

export function load(payload) {
  return {
    type: TOPIC_LOAD,
    payload
  };
}

export function addVote(topicId, resourceId) {
  return {
    type: RESOURCE_VOTE_UP,
    topicId,
    resourceId,
  };
}

export function removeVote(topicId, resourceId) {
  return {
    type: RESOURCE_VOTE_DOWN,
    topicId,
    resourceId
  };
}
