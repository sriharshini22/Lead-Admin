package com.example.leadadminback.lead;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class LeadService {
    private final LeadRepository leadRepository;

    @Autowired
    public LeadService(LeadRepository leadRepository) {
        this.leadRepository = leadRepository;
    }

//    public Optional<Lead> getLeadByFirstname(String firstname) {
//        return this.studentRepository.findByFirstname(firstname);
//    }

    public List<Lead> getAllLeads() {
        return this.leadRepository.findAll();
    }

    public Lead insertLead(Lead lead) {
        lead.setInsertionTime(LocalDateTime.now());
        this.leadRepository.save(lead);
        return lead;
    }

    public void deleteLeadById(String id) {
        leadRepository.deleteById(id);
    }

    public void assignLeadToAgent(AssignRequest assignRequest){
        Optional<Lead> leadOptional = leadRepository.findById(assignRequest.getId());
        if (leadOptional.isPresent()) {
            Lead lead = leadOptional.get();
            String prev= lead.getAssignedTo();
            String curr = assignRequest.getUsername();
            lead.setStatus("Pending"); // Update the status
            lead.setAssignedTo(prev+"\n"+curr);
            leadRepository.save(lead);
        }
    }
}