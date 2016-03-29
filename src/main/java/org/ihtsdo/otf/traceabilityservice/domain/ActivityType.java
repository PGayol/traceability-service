package org.ihtsdo.otf.traceabilityservice.domain;

public enum ActivityType {
	// NB - New enums must go at the end of the list because of the JPA integer mapping
	CONTENT_CHANGE, CLASSIFICATION_SAVE, REBASE, PROMOTION

}
