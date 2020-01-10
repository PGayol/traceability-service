package org.ihtsdo.otf.traceabilityservice;

import org.ihtsdo.otf.traceabilityservice.Application;

import org.ihtsdo.otf.traceabilityservice.service.TraceabilityStreamConsumer;
import org.ihtsdo.otf.traceabilityservice.setup.LogLoaderException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.jms.core.MessageCreator;
import org.springframework.context.ConfigurableApplicationContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
public class PostMessageController {
	private JmsTemplate jmsTemplate;
	private String destinationName;
	private ConfigurableApplicationContext context;
	// final Logger logger = LoggerFactory.getLogger(getClass());

	@Autowired
	private TraceabilityStreamConsumer traceabilityStreamConsumer;

	@RequestMapping(value = "/activities/postMessage", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public String postMessage(@RequestParam String message) throws LogLoaderException {
		// traceabilityStreamConsumer.receiveMessage(message);
		// return "Posted:" + message;

		context = Application.getContext();
		jmsTemplate = context.getBean(JmsTemplate.class);
		destinationName = context.getBeanFactory().resolveEmbeddedValue("${platform.name}." + Application.TRACEABILITY_QUEUE_SUFFIX);

		MessageCreator messageCreator = session -> session.createTextMessage(message+'\n');
		jmsTemplate.send(destinationName, messageCreator);

		// return messageCreator;
		return message;
	}

}
