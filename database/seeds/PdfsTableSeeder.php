<?php

use Illuminate\Database\Seeder;

class PdfsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('pdfs')->delete();
        
        \DB::table('pdfs')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'First Draft PDF',
                'company_name' => 'Nationwide Expos',
                'company_phone' => '720-316-2757',
                'company_cell' => '720-316-2757',
                'company_fax' => '303-942-3599',
                'company_address' => '891 14th St. #4204, Denver, CO 80202',
                'company_email' => 'info@homeandgadgetexpo.com',
                'document_title' => 'Exhibitor Contract',
                'title_note' => 'Mail application and deposit to address below. For credit card orders and booth availability please call',
                'contact_header' => 'Exhibitor Information',
                'details_header' => 'Products or services to be exhibited',
                'booth_header' => 'Booth Information',
            'payment_header' => 'Payment (due with application)',
                'payment_terms' => 'DEPOSIT AND PAYMENT TERMS:  Minimum non-refundable deposit of FIFTY PERCENT of the exhibit space rental fee to be submitted with this applications to reserve exhibit space.  The remaining balance is due throaty days prior to the show. ',
                'billing_text_one' => 'Credit Card',
                'billing_text_two' => 'Check -Make payable to',
                'signing_auth_one' => 'I hereby authorize',
                'signing_auth_two' => 'to charge the indicated credit card. I guarantee and warent that I am legally autherized to enter in to this billing agreement with',
                'mailto_header' => 'Send Deposit & Application To:',
                'signing_terms' => 'THE INDIVIDUAL SIGNING CONTRACT WARRANTS THAT HE OR SHE HAS BEEN AUTHORIZED TO EXECUTE THIS CONTRACT ON BEHALF OF THE ABOVE NAMED EXHIBITOR.  THIS CONTRACT AND SHOW RULES AND REGULATIONS WILL CONSTITUTE THE ENTIRE AGREEMENT BETWEEN EXHIBITOR AND NATIONWIDE EXPOS.',
                'rules_header' => 'GADGET AND HOME SHOW 2016',
                'rules_sub_header' => 'Show Rules and Regulations',
                'rules' => '1. EXHIBIT HOURS - Management shall determine and publicize the exhibit hours the building will be open to the public. Exhibitors will be admitted to the Facility at least one hour prior to show opening times, and must leave within 30 minutes of show closing times. Load in and Load out information will be sent to the contact person at least 30 days before the show is to commence.
2. EXHIBIT REMOVAL - No exhibit may be removed from the Facility until the advertised closing time of the show., without approval of the Management. No exhibits or parts of an exhibit may be removed until after the closing time of the Show.
3. RULES FOR EXHIBITS:&nbsp;a. SHIPPING &ndash; If you are shipping anything to the event, please call the Management to coordinate shipping times, and arrival dates. b. DISPLAYS - No signs, partitions, apparatus, shelving, etc. may extend more than 8 feet above the floor along the rear of an exhibit. Exhibitor will not be permitted to erect signs or display products obstructing the view or disadvantageously affecting the display of other exhibitors. The cloth booth twill be erected by Show Decorator and all orders for rugs, furniture, etc., should be directed to Show Decorator. c. LIABILITY - The Exhibitor is entirely responsible for the leased space and shall not injure, mar or deface the premises. The Exhibitor shall not drive, nor permit to be driven, any pins, nails, hooks, tacks, or screws in any part of the Facility. Furthermore, Exhibitor shall not affix to the walls or windows of the Facility any advertisements, signs, etc., or use tape or any other adhesive-type material on painted surfaces. The Exhibitor agrees to reimburse the Management and/or the Facility for any loss or damage occurring to the premises or equipment. d. AISLES - The aisles, passageways and overhead spaces remain under the control of the Management, and no signs, decorations, banners, advertising matter or exhibits will be permitted in those areas except by written permission of the Management. All exhibitors and personnel must remain within the confines of their own spaces. e. SPACE - The space contracted for is to be used solely by the Exhibitor whose name appears on the Contract and no portion can be sublet or assigned without receiving written permission from Management. The Exhibitor shall forfeit right to the space, all prepaid rentals and, upon demand, pay any rent balance owing to the Management for failure to occupy or use the space or to have the exhibit completed and in place by the opening of the Show. Management reserves the right to relocate the exhibitor. f. ALCOHOLIC BEVERAGES - Exhibitors and their employees, agents and guests shall not consume any alcoholic beverages except in designated areas. Violation shall be grounds for removing Exhibitor and exhibit from the Show without refund. g. RESTRICTIONS - The Management reserves the right to restrict or remove exhibits, without refund, that have been falsely entered, or are deemed by the Management unsuitable or objectionable. This restriction applies to, but is not limited to, noise, P.A. systems, persons, animals, birds, things, conduct, printed matter, or anything of a character that might be objectionable to the Show or the Management. Only products listed on the exhibitor applications are products that the exhibitor is allowed to sell. If Management does remove exhibitor for violating this agreement, Management will not be responsible to refund any monies that were paid.
4. ALL EXHIBITS MUST COMPLY WITH CITY ORDINACES, REGULATIONS AND FIRE MARSHALL INSTRUCTIONS.
5. STORAGE - Fire Marshall Regulations prohibit the storage of boxes, crates, packing material, etc., and not more than a oneday supply of literature at your display. Exhibitor must arrange for storage of empty crates, etc. at own expense.
6. RUNNING OF ENGINES - Oil or gasoline engines may be operated only with the consent of the Management and must conform to City Ordinances, Regulations and Fire Marshall Instructions.
7. INSTALLATIONS - Any special carpentry, wiring, electrical or other work, gas, steam, water or drainage connection shall be installed at Exhibitor&#39;s expense, and in accordance with the building and Management&#39;s direction.
8. MISCELLANEOUS TERMS AND CONDITIONS: a. CANCELLATION OF CONTRACT - If this agreement is cancelled by Exhibitor for any reason, or by Management because of Exhibitor&#39;s default or violation of this agreement, monies paid to Management by Exhibitor shall be retained as follows: If cancellation occurs 60 days or more before the start of the Show, Management shall retain 50% of the total rental and return the balance to Exhibitor. If cancellation occurs within 60 days of the Show, the entire rental paid to date by Exhibitor shall be retained by Management. The retained rental shall be liquidated damages for the direct and indirect costs incurred by Management for organizing, setting up and providing space for Exhibitor and additional expenses caused by Exhibitor&#39;s withdrawal including releasing the space. All cancellations must be in writing. b. RIGHTS OF THE MANAGEMENT IN EVENT EXHIBITION IS NOT HELD - Management shall not be liable for damages or expense incurred by Exhibitors in the event the Show is delayed, interrupted or not held as scheduled. If for any reason beyond the control of the Management, the Show is not held, Management may retain so much of the amount paid by Exhibitors as is necessary to defray expenses already incurred by the Management. c. INDEMNIFICATION - Exhibitor shall indemnify and hold harmless the Management, Nationwide Expos, and the Facility from and against any and all claims, damages, losses and expenses including attorneys&#39; fees arising out of or resulting from the activities of the Exhibitor, or the officers, contractors, licensees, agents, servants, employees, guests, invitees or visitors of Exhibitor. d. INSURANCE - Exhibitor shall purchase and maintain such insurance, naming Nationwide Expo as additional insured, as will protect him from claims which may arise out of or result from the activities of the Exhibitor. Neither the Management nor the Facility shall be responsible for loss of damages occurring to the exhibit or sustained by the Exhibitor from any cause. The Exhibitor, if desired, must obtain such additional insurance. e. ATTORNEY&#39;S FEES - If a civil action arises between parties out of this agreement or to enforce any of its provisions, the losing party shall pay the attorney&#39;s fees of the prevailing party as trial court may adjudge reasonable. If an appeal is taken from any Judgment of the trial court, the losing party shall pay the amount the appellate court shall adjudge reasonable as the prevailing party&#39;s attorney&#39;s fees on appeal. f. LICENSES - Any and all City, County, State or Federal licenses, inspections or permits required by law of any Exhibitor in the installation or operation of his or her display shall be obtained by the Exhibitor at his or her own expense prior to the opening of the Show. g. ASSIGNMENT - Management may sell, assign, or transfer any or all of its rights, benefits, privileges, obligations, or duties under this agreement.
10. SECURITY &ndash; The facility will be locked, but Nationwide Expo will not be liable for any missing inventory, or items of exhibitor. Exhibitor should not leave anything that is valuable overnight.
11. CONTRACT &ndash; This is an enforceable contract, and all amounts signed for hereof are due. Exhibitor can not set-up booth without paying the full amount due. Nationwide Expo does not accept checks if it&rsquo;s within 14 days of the event. Final Payments are due 30 days before the appropriate show.
12. COMPLETE AGREEMENT - This agreement contains all the terms and conditions agreed on by the parties hereto, and no other agreements, oral or otherwise, regarding the subject matter of this Contract, shall be deemed to exist or to bind any of the parties hereto.
13. JURISDICTION &ndash; If either party has a complaint, both parties agree this agreement is based on the laws of Colorado, and venue will be Denver, Colorado.
',
                'event_id' => '',
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-23 19:11:15',
            ),
        ));
        
        
    }
}
