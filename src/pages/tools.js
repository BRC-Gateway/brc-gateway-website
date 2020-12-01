import React from "react";
import { Link } from "gatsby";

import LayoutFullwidth from "../components/LayoutFullwidth";
import SEO from "../components/Seo";

const ToolsPage = () => (
  <LayoutFullwidth>
    <SEO title="BRC Tools and Services" />
    <div class="row mb-4 px-3 pt-4 pb-2 tw-border-b-4 tw-border-gray-600">
      <div class="col-12">
        <h4>BRC Tools and Services</h4>
        <p
          style={{
            fontSize: "0.9rem",
          }}
        >
          The BRCs include a wide array of tools and services to enable
          researchers to locate, filter, process, analyze, and explore data.
          Note that many of these tools require login to the BRC to enable use
          with private data.
        </p>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <h6>
              <a href="#ird-vipr">IRD/ViPR</a>
            </h6>
          </div>
          <div className="col-md-4">
            <h6>
              <a href="#patric">PATRIC</a>
            </h6>
          </div>
          <div id="ird-vipr" className="col-md-4">
            <h6>
              <a href="#veupathdb">VEuPathDB</a>
            </h6>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <h5>
              Tools for Viruses at{" "}
              <a
                href="https://www.fludb.org/brc/analysis_landing.spg?decorator=influenza"
                target="_blank"
              >
                IRD
              </a>
              /
              <a
                href="https://www.viprbrc.org/brc/home.spg?decorator=vipr"
                target="_blank"
              >
                ViPR
              </a>
            </h5>
            <table className="table" style={{ fontSize: "0.9rem" }}>
              <tbody>
                <tr>
                  <td>Identify Similar Sequences (BLAST)</td>
                  <td>
                    Uses BLAST algorithms to identify similar nucleotide or
                    amino acid sequences in a variety of custom BRC databases.
                  </td>
                </tr>
                <tr>
                  <td>Identify Short Peptides in Proteins</td>
                  <td>
                    Identifies short amino acid strings in target proteins using
                    exact, fuzzy, or pattern matching.
                  </td>
                </tr>
                <tr>
                  <td>Generate Phylogenetic Tree</td>
                  <td>
                    Generates phylogenetic trees based on nucleotide or amino
                    acid sequences and displays results in interactive tree
                    viewer to annotate tree nodes.
                  </td>
                </tr>
                <tr>
                  <td>Identify Point Mutations</td>
                  <td>
                    Identifies protein sequences that have a specific amino acid
                    at a specific position.
                  </td>
                </tr>
                <tr>
                  <td>Pandemic H1N1 Classification</td>
                  <td>
                    Identifies nucleotide sequences closely related to the 2009
                    pandemic H1N1 strain.
                  </td>
                </tr>
                <tr>
                  <td>HPAI H5N1 Clade Classification</td>
                  <td>Predicts clade for highly pathogenic H5 HA sequences.</td>
                </tr>
                <tr>
                  <td>Swine H1 Clade Classification</td>
                  <td>Predicts clade for Global and US Swine H1 viruses.</td>
                </tr>
                <tr>
                  <td>Sequence Format Conversion</td>
                  <td>Performs simple sequence format conversions</td>
                </tr>
                <tr>
                  <td>HA Subtype Numbering Conversion</td>
                  <td>
                    Renumbers HA sequences according to a cross-subtype
                    numbering scheme proposed by Burke and Smith.
                  </td>
                </tr>
                <tr>
                  <td>Align Sequences</td>
                  <td>Aligns nucleotide or amino acid sequences.</td>
                </tr>
                <tr>
                  <td>Visualize Aligned Sequences</td>
                  <td>
                    Displays interactive alignment viewer to view aligned
                    nucleotide or amino acid sequences.
                  </td>
                </tr>
                <tr>
                  <td>Annotate Sequences</td>
                  <td>
                    Identifies segment, type, CDS location, and subtype (if
                    segments 4 or 6), and possible sequencing errors for a given
                    set of FASTA sequences using IRD Influenza annotation
                    protocol.
                  </td>
                </tr>
                <tr>
                  <td>VIGOR4 Genome Annotator (ViPR)</td>
                  <td>
                    Annotates given genome sequence using VIGOR4 (Viral Genome
                    ORF Reader).
                  </td>
                </tr>
                <tr>
                  <td>GATU Genome Annotator (ViPR)</td>
                  <td>
                    Annotates given genome sequence using a well annotated
                    reference genome.
                  </td>
                </tr>
                <tr>
                  <td>Analyze Sequence Variation (SNP)</td>
                  <td>
                    Computes the extent of variation at each position of
                    nucleotide or amino acid sequences uploaded or selected from
                    the BRC database.
                  </td>
                </tr>
                <tr>
                  <td>
                    Metadata-driven Comparative Analysis Tool for Sequences
                    (meta-CATS)
                  </td>
                  <td>
                    Performs a customized automated comparative analysis to
                    identify positions in the sequence that significantly differ
                    between groups of sequences
                  </td>
                </tr>
                <tr>
                  <td>PCR Primer Design</td>
                  <td>Predicts the optimal primer set(s) for DNA sequences</td>
                </tr>
                <tr>
                  <td>Antiviral Resistance Risk Assessment</td>
                  <td>
                    Determines the presence of amino acid changes associated
                    with altered response to antiviral drugs in user input
                    sequence.
                  </td>
                </tr>
                <tr>
                  <td>Identify Sequence Features in Segments</td>
                  <td>
                    Identifies experimentally characterized sequence features or
                    phenotypic variant types.
                  </td>
                </tr>
                <tr id="patric">
                  <td>
                    SARS-Cov-2 Genome Assembly and Annotation (via{" "}
                    <a href="https://www.bv-brc.org/" target="_blank">
                      BV-BRC
                    </a>
                    )
                  </td>
                  <td>
                    Provides meta-service that performs tailored genome
                    assembly, annotation, and variation analysis of SARS-CoV-2
                    genome reads.
                  </td>
                </tr>
              </tbody>
            </table>

            <hr />
            <h5>
              Tools for Bacteria at{" "}
              <a href="https://patricbrc.org" target="_blank">
                PATRIC
              </a>
            </h5>
            <table className="table" style={{ fontSize: "0.9rem" }}>
              <tbody>
                <tr>
                  <td>BLAST</td>
                  <td>
                    Performs searches against public or private genomes in the
                    BRC or other reference databases using DNA or protein
                    sequences.
                  </td>
                </tr>
                <tr>
                  <td>Codon Tree</td>
                  <td>
                    Constructs custom phylogenetic trees built from up to 100
                    genomes using the Codon Tree method.
                  </td>
                </tr>
                <tr>
                  <td>Comparative Pathway</td>
                  <td>
                    Identifies a set of pathways based on taxonomy, EC number,
                    pathway ID, pathway name and/or specific annotation type
                    across a set of genomes.
                  </td>
                </tr>
                <tr>
                  <td>Comprehensive Genome Analysis</td>
                  <td>
                    Provides meta-service including genome assembly, annotation,
                    nearest neighbors, subsystem summary, phylogenetic tree, and
                    distinguishing features.
                  </td>
                </tr>
                <tr>
                  <td>Differential Expression</td>
                  <td>
                    Integrates user-provided differential expression datasets
                    for comparison with other data sets or analysis using
                    annotations.{" "}
                  </td>
                </tr>
                <tr>
                  <td>FastqUtils</td>
                  <td>
                    Performs operations on FASTQ files including base call
                    quality reports, read alignment to genomes, quantity/quality
                    assessment, and trimming.
                  </td>
                </tr>
                <tr>
                  <td>Genome Alignment</td>
                  <td>
                    Produces a whole-genome alignment of two or more genomes and
                    presents a visualization showing homologous regions and
                    rearrangements
                  </td>
                </tr>
                <tr>
                  <td>Genome Annotation</td>
                  <td>
                    Annotates prokaryotic genomes with gene calls, protein
                    features, and a variety of other genomic features.
                  </td>
                </tr>
                <tr>
                  <td>Genome Assembly</td>
                  <td>
                    Assembles sequence reads into contigs with a variety of
                    assembly algorithms tuned to fit certain data types or
                    analysis criteria
                  </td>
                </tr>
                <tr>
                  <td>ID Mapper</td>
                  <td>
                    Maps BRC identifiers to those from other prominent external
                    databases such as GenBank, RefSeq, EMBL, UniProt, KEGG, etc,
                    and vice versa.
                  </td>
                </tr>
                <tr>
                  <td>Metagenome Binning</td>
                  <td>
                    Bins reads or contigs from environmental samples into a set
                    of genomes to reconstruct constituent bacterial and archaeal
                    genomes.
                  </td>
                </tr>
                <tr>
                  <td>Metagenomic Read Mapping</td>
                  <td>
                    Aligns reads against antibiotic resistance genes, virulence
                    factors, or other custom sets of genes.
                  </td>
                </tr>
                <tr>
                  <td>Model Reconstruction</td>
                  <td>
                    Generates draft genome-scale metabolic models using genome
                    annotation and a collection of other analytical methods.{" "}
                  </td>
                </tr>
                <tr>
                  <td>Protein Family Sorter</td>
                  <td>
                    Displays the distribution of protein families across a set
                    of selected genomes via an interactive heatmap with
                    clustering and filter controls.
                  </td>
                </tr>
                <tr>
                  <td>Proteome Comparison</td>
                  <td>
                    Compares up to eight genomes against a reference by
                    identifying corresponding protein sequences, displayed in an
                    interactive circular genome view.
                  </td>
                </tr>
                <tr>
                  <td>RNASeq Analysis</td>
                  <td>
                    Provides services for aligning, assembling, and testing
                    differential expression on RNA-Seq data from bacterial or
                    host, e.g., human.
                  </td>
                </tr>
                <tr>
                  <td>Similar Genome Finder</td>
                  <td>
                    Finds similar public genomes in the BRC database or computes
                    genome distance between genomes.
                  </td>
                </tr>
                <tr>
                  <td>Taxonomic Classification</td>
                  <td>
                    Assigns reads or contigs from metagenomic samples to
                    taxonomic bins, providing an initial profile of the possible
                    constituent organisms present in the sample
                  </td>
                </tr>
                <tr>
                  <td>TnSeq Analysis</td>
                  <td>
                    Facilitates determination of essential regions in bacterial
                    genomes from transposon insertion sequencing (Tn-Seq) data
                  </td>
                </tr>
                <tr id="veupathdb">
                  <td>Variation Analysis</td>
                  <td>
                    Identifies and annotates sequence variations in short read
                    samples and compares them to a closely related reference
                    genome.
                  </td>
                </tr>
              </tbody>
            </table>

            <hr />
            <h5>
              Tools for Eukaryotes/Vectors at{" "}
              <a href="https://veupathdb.org" target="_blank">
                VEuPathDB
              </a>
            </h5>
            <table className="table" style={{ fontSize: "0.9rem" }}>
              <tbody>
                <tr>
                  <td>BLAST</td>
                  <td>
                    Finds genes, genomic sequences, ESTs, or PopSet Sequences
                    that have sequence similarity to given input sequence.
                  </td>
                </tr>
                <tr>
                  <td>Companion</td>
                  <td>
                    Provides parasite genome annotation as a service using a
                    reference-based approach.
                  </td>
                </tr>
                <tr>
                  <td>EuPaGDT (Eukaryotic Pathogen CRISPR gRNA Design Tool)</td>
                  <td>
                    Identifies guide RNA (gRNA) in input gene(s) to guide
                    appropriate gRNA design for many eukaryotic pathogens.
                  </td>
                </tr>
                <tr>
                  <td>Galaxy</td>
                  <td>
                    Analyzes RNA-Seq, ChIP-Seq, Variants, and many other data
                    sets with preconfigured workflows and preloaded genomes.
                  </td>
                </tr>
                <tr>
                  <td>PubMed and Entrez</td>
                  <td>
                    Provides targeted search results from PubMed and Entrez.
                  </td>
                </tr>
                <tr>
                  <td>Sequence Retrieval</td>
                  <td>
                    Retrieve FASTA sequences based on provided identifiers.
                  </td>
                </tr>
                <tr>
                  <td>Web Services</td>
                  <td>
                    Provides programmatic access to searches via REST Web
                    Services, returning a list of records (genes, compounds,
                    etc.) in selected formats.
                  </td>
                </tr>
                <tr>
                  <td>Enrichment Analyses</td>
                  <td>
                    Provides a tool to determine statistical enrichment in gene
                    lists of gene ontology (GO) terms, metabolic pathways and
                    text in gene product descriptions.
                  </td>
                </tr>
                <tr>
                  <td>Boolean operations</td>
                  <td>
                    Provides a tool to combine search results using Boolean
                    operations like intersect, union and minus.
                  </td>
                </tr>
                <tr>
                  <td>Apollo</td>
                  <td>
                    Provides a tool to enable the annotation of both functional
                    and structural aspects of genes.
                  </td>
                </tr>
                <tr>
                  <td>Site Search</td>
                  <td>
                    Provides a tool to search the entire site for any keyword.
                    Search results are organized in filterable categories.
                  </td>
                </tr>
                <tr>
                  <td>Genome Browser</td>
                  <td>
                    Provides a tool to explore genomes and aligned genomic data
                    in an interactive browsable way.
                  </td>
                </tr>
                <tr>
                  <td>User Comments</td>
                  <td>
                    Provide a mechanism for users to quickly share their
                    knowledge about genes with the community.{" "}
                  </td>
                </tr>
                <tr>
                  <td>Multiple sequence alignment (isolates)</td>
                  <td>
                    Provides a multiple sequence alignment tool for nucleotide
                    sequences retrieved from PopSet.
                  </td>
                </tr>
                <tr>
                  <td>Results downloads</td>
                  <td>
                    Provides a tool to customize downloads with any available
                    information.
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "18px" }}>
                    <strong>Data analysis searches</strong>
                  </td>
                  <td>
                    Specialized searches enabling sophisticated mining of
                    underlying data.{" "}
                  </td>
                </tr>
                <tr>
                  <td>--- Annotation</td>
                  <td>
                    Provides a set of searches that enable the identification of
                    genes based on lists of IDs, user comments and annotation
                    updates.
                  </td>
                </tr>
                <tr>
                  <td>--- Epigenomics</td>
                  <td>
                    Provides searches to identify genes based on location of
                    epigenetic markers.
                  </td>
                </tr>
                <tr>
                  <td>--- Function prediction</td>
                  <td>
                    Provides searches to identify genes based on predicted
                    function using enzyme commission (EC) numbers or GO terms.
                  </td>
                </tr>
                <tr>
                  <td>--- Gene models</td>
                  <td>
                    Provides a tool to identify genes based on their type and/or
                    structural features.
                  </td>
                </tr>
                <tr>
                  <td>--- Genetic variation</td>
                  <td>
                    Provides a tool to identify genes based on genetic variation
                    in the population, including single nucleotide polymorphisms
                    or copy number variation.
                  </td>
                </tr>
                <tr>
                  <td>--- Genomic Location</td>
                  <td>
                    Provides a tool to identify genes based on their location on
                    nuclear or non-nuclear genomes.
                  </td>
                </tr>
                <tr>
                  <td>--- Immunology</td>
                  <td>
                    Provides a tool to identify genes whose protein products are
                    predicted to contain epitopes identified by the Immune
                    Epitope Database and Analysis Resource (IEDB).
                  </td>
                </tr>
                <tr>
                  <td>--- Orthology and synteny</td>
                  <td>
                    Provides tools to identify genes based on their phyletic
                    pattern across the tree of life.
                  </td>
                </tr>
                <tr>
                  <td>--- Pathways and interactions</td>
                  <td>
                    Provides tools to identify genes based on their involvement
                    in metabolic pathways or their interaction with other genes.
                  </td>
                </tr>
                <tr>
                  <td>--- Phenotype</td>
                  <td>
                    Provides a tool to identify genes based on available
                    phenotype datasets.
                  </td>
                </tr>
                <tr>
                  <td>--- Protein features and properties</td>
                  <td>
                    Provides tools to identify genes based on the properties of
                    the proteins they code for such as molecular weight,
                    isoelectric point or presence of InterPro domains.
                  </td>
                </tr>
                <tr>
                  <td>--- Protein targeting and localization</td>
                  <td>
                    Provides tools to identify genes based on predicted elements
                    that may determine their subcellular localization such as
                    signal peptides and transmembrane domains.
                  </td>
                </tr>
                <tr>
                  <td>--- Proteomics</td>
                  <td>
                    Provides tools to identify genes based on experimental
                    proteomic data including mass spectrometry and quantitative
                    data.
                  </td>
                </tr>
                <tr>
                  <td>--- Sequence analysis</td>
                  <td>
                    Provides tools to identify genes based on specified analyses
                    such as regular expressions to define motifs
                  </td>
                </tr>
                <tr>
                  <td>--- Structure analysis</td>
                  <td>
                    Provides tools to identify genes based on structural
                    analyses.
                  </td>
                </tr>
                <tr>
                  <td>--- Taxonomy</td>
                  <td>
                    Provides a tool to identify genes based on their taxonomy.
                  </td>
                </tr>
                <tr>
                  <td>--- Transcriptomics</td>
                  <td>
                    Provides tools to identify genes based on experimental
                    transcriptomic data including expressed sequence tags,
                    microarrays or RNA sequencing.
                  </td>
                </tr>
                <tr>
                  <td>--- Popset Isolate Sequences</td>
                  <td>
                    Provides tools to identify isolates retrieved from the
                    PopSet database using information about the isolates or by
                    sequence similarity.
                  </td>
                </tr>
                <tr>
                  <td>--- Genomic Sequences</td>
                  <td>
                    Provides tools to retrieve genomic sequences such as
                    contigs, scaffolds or chromosomes
                  </td>
                </tr>
                <tr>
                  <td>--- Genomic Segments</td>
                  <td>
                    Provides tools to identify specific segments in the genomic
                    sequence by location or regular expressions.{" "}
                  </td>
                </tr>
                <tr>
                  <td>--- Single Nucleotide Polymorphisms (SNPs)</td>
                  <td>
                    Provides tools to find SNPs identified from next generation
                    sequencing data that distinguish specified populations.
                  </td>
                </tr>
                <tr>
                  <td>--- Expressed Sequence Tags (ESTs)</td>
                  <td>Provides tools to identify ESTs retrieved from dbEST.</td>
                </tr>
                <tr>
                  <td>--- Metabolic Pathways</td>
                  <td>
                    Provides tools to identify metabolic pathways and to
                    dynamically interact with pathways.
                  </td>
                </tr>
                <tr>
                  <td>--- Compounds</td>
                  <td>
                    Provides tools to identify substrates and reactants found in
                    metabolic pathways.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </LayoutFullwidth>
);

export default ToolsPage;
