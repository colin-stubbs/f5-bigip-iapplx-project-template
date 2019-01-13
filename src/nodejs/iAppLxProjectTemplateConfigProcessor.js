/* iAppLxProjectTemplateConfigProcessor.js */

'use strict';

var configTaskUtil = require("./configTaskUtil");


/**
 * A demo processor which does not perform any real ICRD actions. It's extended from configProcessor
 * @constructor
 */
function iAppLxProjectTemplateConfigProcessor() {
}

iAppLxProjectTemplateConfigProcessor.prototype.WORKER_URI_PATH = "shared/iapp/processors/iapplx-project-template-js";

iAppLxProjectTemplateConfigProcessor.prototype.onStart = function (success) {
    // this.apiStatus = this.API_STATUS.INTERNAL_ONLY;
    this.isPublic = true;


    configTaskUtil.initialize({
        restOperationFactory: this.restOperationFactory,
        eventChannel: this.eventChannel,
        restHelper : this.restHelper
    });

    success();
};

iAppLxProjectTemplateConfigProcessor.prototype.onGet = function(restOperation) {
  try {
    restOperation.setBody(JSON.stringify( { value: "iAppLX Project Template" } ));
  } catch (ex) {
    restOperation.fail(ex);
    return;
  }
  this.completeRequest(restOperation, this.wellKnownPorts.STATUS_ACCEPTED);
};

/**
 * Handles POST. It validates the input and accepts the rest request. Since this is no-op
 * processor, it sends a PATCH request to the block configuration
 * task updating state to BOUND
 *
 * @param configTaskState
 */
iAppLxProjectTemplateConfigProcessor.prototype.onPost = function(restOperation) {
    try {
      var body = restOperation.getBody();
      restOperation.setBody({});
    } catch (ex) {
        restOperation.fail(ex);
        return;
    }
    this.completeRequest(restOperation, this.wellKnownPorts.STATUS_ACCEPTED);
};

/**
 * Handles DELETE. It validates the input and accepts the rest request. Since this is no-op
 * processor, it  sends a PATCH request to the block configuration task updating state
 * to UNBOUND
 *
 * @param restOperation
 */
iAppLxProjectTemplateConfigProcessor.prototype.onDelete = function(restOperation) {
    this.completeRequest(restOperation, this.wellKnownPorts.STATUS_ACCEPTED);
};

module.exports = iAppLxProjectTemplateConfigProcessor;
