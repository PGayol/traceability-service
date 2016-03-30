package org.ihtsdo.otf.traceabilityservice.rest;

import com.google.common.base.Strings;
import org.ihtsdo.otf.traceabilityservice.domain.Activity;
import org.ihtsdo.otf.traceabilityservice.domain.Branch;
import org.ihtsdo.otf.traceabilityservice.repository.ActivityRepository;
import org.ihtsdo.otf.traceabilityservice.repository.BranchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpServerErrorException;

@RestController
@RequestMapping(value = "/activities", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
public class ActivityController {

	@Autowired
	private ActivityRepository activityRepository;

	@Autowired
	private BranchRepository branchRepository;

	@RequestMapping
	@ResponseBody
	public Page<Activity> getActivities(
			@RequestParam(required = false) String onBranch,
			@RequestParam(required = false, defaultValue = "0") int page,
			@RequestParam(required = false, defaultValue = "1000") int size) {

		if (!Strings.isNullOrEmpty(onBranch)) {
			final Branch branch = branchRepository.findByBranchPath(onBranch);
			if (branch == null) {
				throw new HttpServerErrorException(HttpStatus.NOT_FOUND, "Branch not found '" + onBranch + "'");
			}
			return activityRepository.findOnBranch(branch, new PageRequest(page, size));
		} else {
			return activityRepository.findAll(new PageRequest(page, size));
		}
	}

}
