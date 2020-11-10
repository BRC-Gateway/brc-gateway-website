import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TaxaPage = () => (
  <Layout>
    <SEO title="Taxa" />
    <div class="row mb-4 px-3 pt-4 pb-2 bg-wash tw-border-b-4 tw-border-gray-600">
      <div class="col-12">
        <h4>Taxa</h4>
        <p>The BRCs include, but not limited to, organisms in the <a href="https://www.niaid.nih.gov/node/3275" target="_blank">NIAID list of emerging and re-emerging infectious diseases</a>, plus vectors of human pathogens. The table below provides direct links to major taxonomic groups supported by the BRCs.</p>

        <div className="row">
          <div className="col-md-3">
            <h5>Viruses</h5>
            <ul>
              <li><a href="https://www.fludb.org/brc/home.spg?decorator=influenza">Influenza</a></li>
              <li><a href="https://www.viprbrc.org/brc/home.spg?decorator=calici">Caliciviridae</a></li>
              <li><a href="https://www.viprbrc.org/brc/home.spg?decorator=corona">Coronaviridae</a></li>
              <li><a href="https://www.viprbrc.org/brc/home.spg?decorator=flavi">Flaviviridae</a></li>
              <li><a href="https://www.viprbrc.org/brc/home.spg?decorator=hepe">Hepeviridae</a></li>
              <li><a href="https://www.viprbrc.org/brc/home.spg?decorator=picorna">Picornaviridae</a></li>
              <li><a href="https://www.viprbrc.org/brc/home.spg?decorator=toga">Togaviridae</a></li>
              <li><a href="https://www.viprbrc.org/brc/home.spg?decorator=vipr#">Bunyavirales</a></li>
              <li><a href="https://www.viprbrc.org/brc/home.spg?decorator=filo">Filoviridae</a></li>
              <li><a href="https://www.viprbrc.org/brc/home.spg?decorator=paramyxo">Paramyxoviridae</a></li>
              <li><a href="https://www.viprbrc.org/brc/home.spg?decorator=pneumo">Pneumoviridae</a></li>
              <li><a href="https://www.viprbrc.org/brc/home.spg?decorator=rhabdo">Rhabdoviridae</a></li>
              <li><a href="https://www.viprbrc.org/brc/home.spg?decorator=reo">Reoviridae</a></li>
              <li><a href="https://www.viprbrc.org/brc/home.spg?decorator=herpes">Herpesviridae</a></li>
              <li><a href="https://www.viprbrc.org/brc/home.spg?decorator=pox">Poxviridae</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Bacteria</h5>
            <ul>
              <li><a href="https://patricbrc.org/view/Taxonomy/469#view_tab=overview">Acinetobacter</a></li>
              <li><a href="https://patricbrc.org/view/Taxonomy/1386#view_tab=overview">Bacillus</a></li>
              <li><a href="https://patricbrc.org/view/Taxonomy/773#view_tab=overview">Bartonella</a></li>
              <li><a href="https://patricbrc.org/view/Taxonomy/64895#view_tab=overview">Borreliella</a></li>
              <li><a href="https://patricbrc.org/view/Taxonomy/234#view_tab=overview">Brucella</a></li>
              <li><a href="https://patricbrc.org/view/Taxonomy/32008#view_tab=overview">Burkholderia</a></li>
              <li><a href="https://patricbrc.org/view/Taxonomy/194#view_tab=overview">Campylobacter</a></li>
              <li><a href="https://patricbrc.org/view/Taxonomy/810#view_tab=overview">Chlamydia</a></li>
              <li><a href="https://patricbrc.org/view/Taxonomy/1485#view_tab=overview">Clostridium</a></li>
              <li><a href="https://patricbrc.org/view/Taxonomy/776#view_tab=overview">Coxiella</a></li>
              <li><a href="https://patricbrc.org/view/Taxonomy/943#view_tab=overview">Ehrlichia</a></li>
              <li><a href="https://patricbrc.org/view/Taxonomy/561#view_tab=overview">Escherichia</a></li>
              <li><a href="https://patricbrc.org/view/Taxonomy/262#view_tab=overview">Francisella</a></li>
              <li><a href="https://patricbrc.org/view/Taxonomy/209#view_tab=overview">Helicobacter</a></li>
              <li><a href="https://patricbrc.org/view/Taxonomy/1637#view_tab=overview">Listeria</a></li>
              <li><a href="https://patricbrc.org/view/Taxonomy/1763#view_tab=overview">Mycobacterium</a></li>
              <li><a href="https://patricbrc.org/view/Taxonomy/286#view_tab=overview">Pseudomonas</a></li>
              <li><a href="https://patricbrc.org/view/Taxonomy/780#view_tab=overview">Rickettsia</a></li>
              <li><a href="https://patricbrc.org/view/Taxonomy/590#view_tab=overview">Salmonella</a></li>
              <li><a href="https://patricbrc.org/view/Taxonomy/620#view_tab=overview">Shigella</a></li>
              <li><a href="https://patricbrc.org/view/Taxonomy/1279#view_tab=overview">Staphylococcus</a></li>
              <li><a href="https://patricbrc.org/view/Taxonomy/1301#view_tab=overview">Streptococcus</a></li>
              <li><a href="https://patricbrc.org/view/Taxonomy/662#view_tab=overview">Vibrio</a></li>
              <li><a href="https://patricbrc.org/view/Taxonomy/629#view_tab=overview">Yersinia</a></li>
              <li><a href="https://patricbrc.org/view/Taxonomy/2157">Archaea</a></li>
              <li><a href="https://patricbrc.org/view/Taxonomy/10239">Bacteriophages</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Protozoa</h5>
            <ul>
              <li><a href="https://amoebadb.org/">Acanthamoeba</a></li>
              <li><a href="https://piroplasmadb.org/">Babesia</a></li>
              <li><a href="https://cryptodb.org/">Cryptosporidium</a></li>
              <li><a href="https://toxodb.org/">Cyclospora</a></li>
              <li><a href="https://amoebadb.org/">Entamoeba</a></li>
              <li><a href="https://giardiadb.org/">Giardia</a></li>
              <li><a href="https://tritrypdb.org/">Leishmania</a></li>
              <li><a href="https://microsporidiadb.org/">Microsporidia</a></li>
              <li><a href="https://amoebadb.org/">Naegleria</a></li>
              <li><a href="https://plasmodb.org/">Plasmodium</a></li>
              <li><a href="https://piroplasmadb.org/">Theileria</a></li>
              <li><a href="https://toxodb.org/">Toxoplasma</a></li>
              <li><a href="https://trichdb.org/">Trichomonas</a></li>
              <li><a href="https://tritrypdb.org/">Trypanosoma</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Fungi</h5>
            <ul>
              <li><a href="https://fungidb.org/">Aspergillus</a></li>
              <li><a href="https://fungidb.org/">Candida</a></li>
              <li><a href="https://fungidb.org/">Coccidioides</a></li>
              <li><a href="https://fungidb.org/">Cryptococcus</a></li>
              <li><a href="https://fungidb.org/">Histoplasma</a></li>
              <li><a href="https://fungidb.org/">Oomycetes</a></li>
            </ul>

            <h5>Vectors</h5>
            <ul>
              <li><a href="https://vectorbase.org/">Aedes</a></li>
              <li><a href="https://vectorbase.org/">Anopheles</a></li>
              <li><a href="https://vectorbase.org/">Glossina</a></li>
              <li><a href="https://vectorbase.org/">Ixodes</a></li>
            </ul>

            <h5>Hosts</h5>
            <ul>
              <li><a href="https://hostdb.org/hostdb/app">Human / Pathogen Model Hosts</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default TaxaPage