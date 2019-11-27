import React from 'react';
import Moment from 'react-moment';
import './ProfileDetails.scss';


const ProfileDetails = (props) => {
    return (
      <div class="background">
        <div>
          {props.infoclean.avatar_url ?
            <img src={props.infoclean.avatar_url}
                 alt="Profile"
                 class="avatar"/> : null }
        </div>
        <div>
          {props.infoclean.name ? <div><p class="name-style">{props.infoclean.name}</p></div> : null }
          {props.infoclean.bio ? <div><p class="bio-style">{props.infoclean.bio}</p></div> : null }
        </div>
        <div>
          {props.infoclean.created_at ? <div><p class="joined-title">Joined:</p><p class="joined-text">{
          <Moment from={new Date()}>{props.infoclean.created_at}</Moment>}</p></div> : null }
        </div>
        <div>
          {props.infoclean.blog ? <div><p class="stats-title">Blog:</p><p class="stats-text"><a href={
             props.infoclean.blog.search("http") !== -1 ? props.infoclean.blog
            : "http://" +  props.infoclean.blog } target="_blank">{props.infoclean.blog}</a></p></div> : null }
        </div>
        <div>
          {props.infoclean.location ? <div><p class="stats-title">Location:</p><p class="stats-text">{props.infoclean.location}</p></div> : null }
        </div>
        <div>
          {props.infoclean.company ? <div><p class="stats-title">Company:</p><p class="stats-text">{props.infoclean.company}</p></div> : null }
        </div>
        <div>
          {props.infoclean.public_repos ? <div><p class="stats-title">Public Repos:</p><p class='stats-text'>{props.infoclean.public_repos}</p></div> : null }
        </div>
        <div>
          {props.infoclean.followers ? <div><p class="stats-title">Followers:</p><p class="stats-text">{props.infoclean.followers}</p></div> : null }
        </div>
        <div>
          {props.infoclean.following ? <div><p class="stats-title">Following:</p><p class="stats-text">{props.infoclean.following}</p></div> : null }
        </div>
        <div>
          {props.infoclean.html_url ? <div><p class="stats-title"><a href={props.infoclean.html_url} target="_blank">View on GitHub</a></p></div> : null }
        </div>
        <div>
          {props.infoclean.login ? <div>{ <img src={"http://ghchart.rshah.org/"+props.infoclean.login} alt="Github chart" />
        }<br/><a href="https://ghchart.rshah.org/" target="_blank">Source for GitHub Chart API</a></div> : null }
        </div>
      </div>
    )};
    
    export default ProfileDetails;