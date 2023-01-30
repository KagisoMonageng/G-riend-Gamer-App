PGDMP                         z         	   griend_db    14.5    14.4                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    24685 	   griend_db    DATABASE     T   CREATE DATABASE griend_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';
    DROP DATABASE griend_db;
                admin    false            �            1259    24686    comments    TABLE     �   CREATE TABLE public.comments (
    comment_id integer NOT NULL,
    gametag text NOT NULL,
    game_id integer NOT NULL,
    comment text NOT NULL,
    hidden boolean NOT NULL,
    date date NOT NULL
);
    DROP TABLE public.comments;
       public         heap    admin    false            �            1259    24691    comments_comment_id_seq    SEQUENCE     �   CREATE SEQUENCE public.comments_comment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.comments_comment_id_seq;
       public          admin    false    209                       0    0    comments_comment_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.comments_comment_id_seq OWNED BY public.comments.comment_id;
          public          admin    false    210            �            1259    24692    gamers    TABLE     �  CREATE TABLE public.gamers (
    gamer_id integer NOT NULL,
    gametag character varying(50) NOT NULL,
    email character varying(255) NOT NULL,
    name character varying(50) NOT NULL,
    surname character varying(50) NOT NULL,
    password character varying(50) NOT NULL,
    gender character varying(50) NOT NULL,
    birthday character varying(50) NOT NULL,
    image character varying(255) NOT NULL,
    friends text[],
    games integer[]
);
    DROP TABLE public.gamers;
       public         heap    postgres    false            �            1259    24697    gamers_gamer_id_seq    SEQUENCE     �   CREATE SEQUENCE public.gamers_gamer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.gamers_gamer_id_seq;
       public          postgres    false    211                       0    0    gamers_gamer_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.gamers_gamer_id_seq OWNED BY public.gamers.gamer_id;
          public          postgres    false    212            �            1259    24698    games    TABLE       CREATE TABLE public.games (
    game_id integer NOT NULL,
    name text NOT NULL,
    publisher character varying(255) NOT NULL,
    image character varying(255) NOT NULL,
    category text,
    screenshots text[],
    full_name text,
    description text,
    url text
);
    DROP TABLE public.games;
       public         heap    postgres    false            �            1259    24703    games_game_id_seq    SEQUENCE     �   CREATE SEQUENCE public.games_game_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.games_game_id_seq;
       public          postgres    false    213                       0    0    games_game_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.games_game_id_seq OWNED BY public.games.game_id;
          public          postgres    false    214            p           2604    24704    comments comment_id    DEFAULT     z   ALTER TABLE ONLY public.comments ALTER COLUMN comment_id SET DEFAULT nextval('public.comments_comment_id_seq'::regclass);
 B   ALTER TABLE public.comments ALTER COLUMN comment_id DROP DEFAULT;
       public          admin    false    210    209            q           2604    24705    gamers gamer_id    DEFAULT     r   ALTER TABLE ONLY public.gamers ALTER COLUMN gamer_id SET DEFAULT nextval('public.gamers_gamer_id_seq'::regclass);
 >   ALTER TABLE public.gamers ALTER COLUMN gamer_id DROP DEFAULT;
       public          postgres    false    212    211            r           2604    24706    games game_id    DEFAULT     n   ALTER TABLE ONLY public.games ALTER COLUMN game_id SET DEFAULT nextval('public.games_game_id_seq'::regclass);
 <   ALTER TABLE public.games ALTER COLUMN game_id DROP DEFAULT;
       public          postgres    false    214    213                      0    24686    comments 
   TABLE DATA           W   COPY public.comments (comment_id, gametag, game_id, comment, hidden, date) FROM stdin;
    public          admin    false    209   k       
          0    24692    gamers 
   TABLE DATA           |   COPY public.gamers (gamer_id, gametag, email, name, surname, password, gender, birthday, image, friends, games) FROM stdin;
    public          postgres    false    211   *                 0    24698    games 
   TABLE DATA           t   COPY public.games (game_id, name, publisher, image, category, screenshots, full_name, description, url) FROM stdin;
    public          postgres    false    213   G                   0    0    comments_comment_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.comments_comment_id_seq', 5, true);
          public          admin    false    210                       0    0    gamers_gamer_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.gamers_gamer_id_seq', 16, true);
          public          postgres    false    212                       0    0    games_game_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.games_game_id_seq', 11, true);
          public          postgres    false    214            t           2606    24708    comments comments_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (comment_id);
 @   ALTER TABLE ONLY public.comments DROP CONSTRAINT comments_pkey;
       public            admin    false    209            v           2606    24710    gamers gamers_email_key 
   CONSTRAINT     S   ALTER TABLE ONLY public.gamers
    ADD CONSTRAINT gamers_email_key UNIQUE (email);
 A   ALTER TABLE ONLY public.gamers DROP CONSTRAINT gamers_email_key;
       public            postgres    false    211            x           2606    24712    gamers gamers_gametag_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.gamers
    ADD CONSTRAINT gamers_gametag_key UNIQUE (gametag);
 C   ALTER TABLE ONLY public.gamers DROP CONSTRAINT gamers_gametag_key;
       public            postgres    false    211            z           2606    24714    gamers gamers_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.gamers
    ADD CONSTRAINT gamers_pkey PRIMARY KEY (gamer_id);
 <   ALTER TABLE ONLY public.gamers DROP CONSTRAINT gamers_pkey;
       public            postgres    false    211            |           2606    24716    games games_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (game_id);
 :   ALTER TABLE ONLY public.games DROP CONSTRAINT games_pkey;
       public            postgres    false    213               �   x�]��
�0���)���KTpt,���.��Ih�H����A׃���C�j�ƀ�2DVC��oa���=q����t�!�`B �;K����Q��2�b��*K���'}F�/�C��_��OZ�9<`Ｇ\�d�
���Cʪ�juoѥ\�7E:Y��8�X����i���/%���Oy      
     x�u��j�0���D��?r�S街�>A�ȱX�����88��^'����e����@�����U�����S��Gr��=
���,/${��j�I�rHy��.��?1i-�Z3�i���V�ܪF�v��hI�b)��,2 1�c���Ԩ�澣�_-��%$�jop����7
��۬�����ʫRʺ�s����/�DP�^�����lHyw��}�>��ߠ���Bv��s����i�l�\�Xp6f��_޶8�П����;l�M��(�>j��S         �  x��X�v�8]K_����Ɣ���^)��I:v<��΢��IPBD J���%�i�%} �Ȋ3sN���P(ܪ[u�A�^�ע`��+^$\��Ǫ���4/�]-L'�T�Ȃ�]'Vy7�o��ʜ/E�*3œ�7���� �O��������f��m����xʷ��2�����_�&�E�K�l]����b�����Ks��a�����`�؈L�"ap��U�I��]�c�n��.�Ж�"������ٕ`
�b9�9��[��g�����Y�v3jw��x��w[n����[Ÿ�y"M������ި�S��yX��䕨����I{غ|{9c�~�u&b�U!c6���LL�]�����3�����ie��S�y�h����o?���Y��[�Z'�u"�TE�Vm���_*e#����{��Sq��i��#��G�3�4	3z��pA!�J�"�� �iN���Ɇ1Х�qV�-*�J�x�6��c<��ZF�X�q�v���#���ʔ�@�=m]�BĚ���9R�ܝ[ �~
����O��d�D�� �x���1Oƣp2{��"Y��̓c�\�U��B�8����0���|B
��Z}ဲ���@O�l[��z]��F�x���
m�:���g�VK��B��h��u�,S[zF\k��:�a�D��8���6���-�Jm,��O��Se��S�Ti���V,�مq7��<BրU�3�)�uf�(K������;Q`c�D�z�;���|M��b�8AK������,sې�PA��+sQ{����,��bU�J0�2_�
�Mo��
�xl�P ��@�����\�A$�7q�W�oL� +7�ɝ7��¢��i�Z�_]�~��]����*��rm�J�M0I����d<����ep����q�Q>�o�6�,C��+���ߺ�~,�B�O��mm&�Z��5c�"�*p���K�Վ��0��{j�R����/l���Y"7������ ���l���xD2�9�^Z_I0��{y줛F�,TC~��	��V��^~�3�M�����w�#����E�=n�\���"����	*o9�*kU��z��hԛ�z�s���T���;���!�/�G�v�{�>}�E6��v����hՄ���i_��%Ҽ���!��x��=wݚ}��� 
8�\`��'�J�^ݓ�8�����d��w��E�G�,EP���m��HGM���mvpڤ�ӌM3�����Y�.W7�R��օ-R����0�*�,���*ɶU�.\��d�'�"P3-Ϊ}��.�[phghaG����o��dp}L�5=��ͮ�Z��>��
����oɫ���uN�^`1����&���ц��������~��{[�Tį�
�^w�6%`�����&�ᤢ9î��p<��e�w� �R�7d�N�90;��u�:a����Ķ|��6Z)�_a��j������i4�{<zɮ*�3���<H�Y)=�ړ����}jݩxM��5��ۨ۟G�q )��	�S�
]j����e()J��t^�kc���,n��Y �Aj�`�}b�Z����w��!�����d��wµ�����4\��<{0:�ԉO�Q��;�j�t��O�&�0�
��?d�3V}�:���t��D�<ش�[h?���u�"���v���h8���Sv�OP��0%��?u�5]��{W�H�Eυ���acu�:H`��d/[6\f<�nqA�n��!�[o�j�^�cֈ��J�X�8��E��B!;]y8mae\+�p�%����!��2X?�l��ۮ$�lUR���^�==��/��)H ��~�l�7~�k@�x� ��NG�v�$��NߧP��f]�hC���P����R:vL�){Ty$E�ɵ�g'��ƭ�0}�&0�iZ�K���I�2v����c1�U2K~sC��^�]������L@��Ȭ�2Mx'*'��aMh�ek�1��O
�@^�Ԥ;�>λ+��v/�T}�l�k�ڰG�=�`��|}F�³?=Ǳx|>�L_��z"<�Wo�lx������?�&�F���Ӛ?�fT�V�xu+�T�"K���M����������a�7��t��NrE�K�M�A5u-d�au���^�l���>^^��/�����&�ʛ] �pN�p��b�	�;�p1�^�U��|�s�|_�z����|��s�3q�B[s���l�D��LTզ����Y�CG��M��Z	'�]�W�k/��UKH ���(�C��p��P��d����v���ߊ�     