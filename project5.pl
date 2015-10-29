# Assignment: Project 5
# Author: Drew Nicholas (dmnicholas@me.com)
# Version: 10.27.2015.01
# Purpose: Apgar Medical Group merge data

use 5.14.01;
use warnings;

my @data;
use constant DATAFILEIN => ";slghfks"; #Put file address here
use constant DATAFILEOUT => "ghdljkdfljsg"; #Put out file here

sub main {

}

main ();

sub readData {
     my $IN;
     @data = ();
     my $counter = 0;
     open ($IN, '<', DATAFILEIN);
     while (<$IN>) {
          chomp ($data[$counter] = $_);
          $counter++
     }
     close $IN;
}